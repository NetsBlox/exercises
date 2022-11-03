<TopAppBar variant="static" dense={true}>
	<Row>
		<Section>
			<Title style="color: #9d9d9d; font-family: sans-serif;">NetsBlox Exercises</Title>
		</Section>
	</Row>
</TopAppBar>

<div style="margin-left: 2em; margin-right: 2em">
	<p>For more information about NetsBlox, check out <a href="https://netsblox.org">https://netsblox.org</a>!</p>
	<TextField label="Search..." bind:value={searchQuery}>
		<Icon class="material-icons" slot="leadingIcon">search</Icon>
	</TextField>
	<List
		twoLine
		>
		{#each exercises as exercise}
		<Item
			>
			<Text>
				<PrimaryText>{exercise.name}
				</PrimaryText>
				<SecondaryText>{exercise.description}</SecondaryText>
			</Text>
			<Set chips={exercise.concepts} let:chip nonInteractive>
				<Chip {chip}>
					<ChipText>{chip}</ChipText>
				</Chip>
			</Set>
			<Meta>
				<IconButton class="material-icons" on:click={downloadExercise(exercise)}>download</IconButton>
				<IconButton class="material-icons" on:click={openInNetsBlox(exercise)}>open_in_new</IconButton>
			</Meta>
		</Item>
		{/each}
	</List>
</div>

<script lang="ts">
	import Button, {Label} from '@smui/button';
	import LayoutGrid, {Cell} from '@smui/layout-grid';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import TextField from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import List, {Meta, Item, PrimaryText, SecondaryText, Text} from '@smui/list';
	import IconButton from '@smui/icon-button';
	import Chip, {Set, Text as ChipText} from '@smui/chips';

	import allExercises from '../exercises.json';
	let searchQuery: string = '';
	let exercises = allExercises;

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
		const url = `https://editor.netsblox.org#open:${exerciseUrl}`;
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

	function showResults(queryString: string) {
		// TODO: add text query parsing (using a parsing lib)
		const query = TextRule.parse(queryString);
		exercises = allExercises.filter(exercise => query.match(exercise));
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

	// TODO: add semi-clever search/filtering capabilities
</script>
