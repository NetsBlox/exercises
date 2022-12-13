<TopAppBar variant="static" dense={true}>
    <Row>
        <Section>
            <img src="./full_logo.png" alt="NetsBlox" style="height: 75%">
                <Title style="color: #9d9d9d; font-family: sans-serif; font-style: italic">Exercises</Title>
            </Section>
        </Row>
    </TopAppBar>

    <div style="margin-left: 2em; margin-right: 2em">
        <p style="font-size:1.15em; text-align: center">Welcome to the official collection of NetsBlox exercises! 
            <br/>Learn to program using NetsBlox by exploring the {allExercises.length} exercises that span a variety of topics and concepts. 
            <br/>For more information about NetsBlox, check out <a href="https://netsblox.org">https://netsblox.org</a>!</p>
        <div style="margin: auto; width: 400px">
            <TextField label="Search exercises..." bind:value={searchQuery}>
                <Icon class="material-icons" slot="leadingIcon">search</Icon>
            </TextField>
        </div>
        <LayoutGrid>
            {#each exercises as exercise}
                <Cell>
                    <Card
                    >
                        <div style="padding: 1rem;">
                            <h2 class="mdc-typography--headline6" style="margin: 0; font-size: 1.3em; display: inline-block;">
                                {exercise.name}
                            </h2>
                            <Set chips={exercise.concepts} let:chip nonInteractive>
                                <Chip {chip}>
                                    <ChipText>{chip}</ChipText>
                                </Chip>
                            </Set>
                            <h4 class="mdc-typography--subtitle2" style="margin: 0; color: #888">
                                {exercise.description}
                            </h4>
                        </div>
                        <Actions>
                            <ActionButtons>
                                <Button on:click={downloadExercise(exercise)} color='secondary'>
                                    <Label>Download</Label>
                                </Button>
                                <Button on:click={openInNetsBlox(exercise)} color='secondary'>
                                    <Label>Open in NetsBlox</Label>
                                </Button>
                            </ActionButtons>
                        </Actions>
                    </Card>
                </Cell>
            {/each}
        </LayoutGrid>
    </div>

<script lang="ts">
    import { page } from '$app/stores';
    import { browser } from "$app/environment";
    import { goto } from '$app/navigation';
    import Button, {Label} from '@smui/button';
    import LayoutGrid, {Cell} from '@smui/layout-grid';
    import Card, {Content, Actions, ActionButtons} from '@smui/card';
    import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
    import TextField from '@smui/textfield';
    import Icon from '@smui/textfield/icon';
    import IconButton from '@smui/icon-button';
    import Chip, {Set, Text as ChipText} from '@smui/chips';
    import Paper, { Title as PaperTitle, Content as PaperContent } from '@smui/paper';
    import {onMount} from 'svelte';

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
    }

    function range(num: number): number[] {
        return [... new Array(num)].map((_, i) => i);
    }

    function sample<T>(options: T[]): T {
        const index = Math.floor(Math.random()*options.length);
        return options[index];
    }

    function choose<T>(options: T[], count: number): T[] {
        return range(count).map(_ => sample(options));
    }

    function uniq<T>(list: T[]): T[] {
        return list.reduce((newList: T[], item: T) => {
            if (!newList.includes(item)) {
                newList.push(item);
            }
            return newList;
        }, []);
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
        const url = exercise.autograder ?
            `https://editor.netsblox.org?extensions=[${encodeURIComponent(exercise.autograder)}]`;
            `https://editor.netsblox.org#open:${exerciseUrl}`;
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
