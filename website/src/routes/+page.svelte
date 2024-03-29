<div style="margin-left: 2em; margin-right: 2em">
    <p style="font-size:1.15em; text-align: center">Welcome to the official collection of NetsBlox exercises! 
        <br/>Learn to program using NetsBlox by exploring the {allExercises.length} exercises that span a variety of topics and concepts. 
        <br/>For more information about NetsBlox, check out <a href="https://netsblox.org">https://netsblox.org</a>!</p>
    <div style="margin: auto; width: 400px">
        <TextField label="Search exercises..." bind:value={searchQuery}>
            <Icon class="material-icons" slot="leadingIcon">search</Icon>
        </TextField>
    </div>
    <List
      twoLine
      singleSelection
    >
      {#each exercises as exercise}
        <Item>
           <Text>
             <PrimaryText>{exercise.name}</PrimaryText>
             <SecondaryText>{exercise.description}</SecondaryText>
           </Text>
           <Meta>
             <Set chips={exercise.concepts} let:chip nonInteractive>
               <Chip {chip}>
                   <ChipText>{chip}</ChipText>
               </Chip>
             </Set>
             <IconButton
               title="Download"
               on:click={() => downloadExercise(exercise)}
               class="material-icons">download</IconButton>
             <IconButton
               title="Open in NetsBlox"
               on:click={() => openInNetsBlox(exercise)}
               class="material-icons">open_in_new</IconButton>
           </Meta>
        </Item>
      {/each}
    </List>
</div>

<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import Button, {Label} from '@smui/button';
    import LayoutGrid, {Cell} from '@smui/layout-grid';
    import Card, {Actions, ActionButtons} from '@smui/card';
    import TextField from '@smui/textfield';
    import Icon from '@smui/textfield/icon';
    import Chip, {Set, Text as ChipText} from '@smui/chips';
    import {onMount} from 'svelte';
    import IconButton from '@smui/icon-button';
    import List, {
      Item,
      Graphic,
      Meta,
      Text,
      PrimaryText,
      SecondaryText,
    } from '@smui/list';

    import allExercises from '../exercises.json';
    let searchQuery: string = '';
    let mounted = false;
    let exercises = allExercises;
    export const prerender = true;

    onMount(() => {
        console.log('initializing searchQuery to', $page.url.searchParams.get('q'));
        searchQuery = $page.url.searchParams.get('q') || '';
        mounted = true;
    });

    interface Exercise {
        name: string;
        description: string;
        concepts: string[];
        topics: string[];
        parsons: string | null;
        template: string;
        autograder: string;
    }

    function range(num: number): number[] {
        return [... new Array(num)].map((_, i) => i);
    }

    function sample<T>(options: T[]): T {
        const index = Math.floor(Math.random()*options.length);
        return options[index];
    }

    function openTab(url: string) {
        const anchor = document.createElement("a");
        anchor.setAttribute("href", url);
        anchor.setAttribute("target", "_blank");
        anchor.click();
    }

    function download(text: string, filename: string) {
        const anchor = document.createElement("a");
        anchor.setAttribute("download", filename);
        anchor.setAttribute("href", `data:text/plain;base64,${btoa(text)}`);
        anchor.click();
    }

    function openInNetsBlox(exercise: Exercise) {
        const exerciseUrl = exercise.parsons || exercise.template;
        const extensionsQs = exercise.extensions.concat(exercise.autograder)
            .map(url => `"${encodeURIComponent(url)}"`)
            .join(',');

        let url = `https://editor.netsblox.org?extensions=[${extensionsQs}]`;
        if (!exercise.autograder) {
            url += `#open:${exerciseUrl}`;
        }

        openTab(url);
    }

    async function downloadExercise(exercise: Exercise) {
        const filename = `${exercise.name}.xml`;
        const url = exercise.parsons || exercise.template;
        const response = await fetch(url);
        const contents = await response.text();

        download(contents, filename);
    }

    $: showResults(searchQuery);
    $: mounted && setQueryString(searchQuery);

    function showResults(queryString: string) {
        // TODO: add text query parsing (using a parsing lib)
        console.log('showResults(', JSON.stringify(queryString), ')');
        const query = TextRule.parse(queryString);
        exercises = allExercises.filter(exercise => query.match(exercise));
    }

    function setQueryString(searchQuery: string) {
        const params = $page.url.searchParams;
        const prevQuery = params.get('q');
        const changed = searchQuery !== prevQuery;

        if (changed) {
            const newParams = new URLSearchParams();
            newParams.set("q", searchQuery);
            [...newParams.entries()].forEach(([key, value]) => params.set(key, value));
            goto(`?${params.toString()}`, {
                replaceState: true,
                noscroll: true,
                keepfocus: true
            });
        }
    }

    interface QueryRule {
        match: (exercise: Exercise) => boolean;
        static parse: (text: string) => QueryRule;
    }

    class TextRule implements QueryRule {
        constructor(text: string) {
            this.words = text.split(/\s+/).map(word => word.toLowerCase()).filter(w => w);
        }

        match(exercise: Exercise): boolean {
            if (!this.words.length) return true;
            const textToSearch = exercise.concepts
            .concat(exercise.topics || [])
            .concat([exercise.name, exercise.description])
            .join(' ').toLowerCase();
            return !!this.words.every(word => textToSearch.includes(word));
        }

        static parse(query: string): TextRule {
            return new TextRule(query);
        }
    }
</script>

<style>
    * :global(.mdc-chip-set) {
        display: inline;
    }

    * :global(.mdc-chip) {
        height: 24px;
    }

    * :global(.mdc-text-field) {
        width: 400px;
    }
</style>
