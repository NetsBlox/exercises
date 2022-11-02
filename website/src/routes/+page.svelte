<h1>NetsBlox Exercises</h1>
<p>For more information about NetsBlox, check out <a href="https://netsblox.org">https://netsblox.org</a>!</p>

<TextField label="Search..." bind:value={searchQuery}>
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
	</Item>
	{/each}
</List>

<script lang="ts">
	import TextField from '@smui/textfield';
	import List, {Item, PrimaryText, SecondaryText, Text} from '@smui/list';
	import Chip, {Set, Text as ChipText} from '@smui/chips';

	import allExercises from '../exercises.json';
	let searchQuery: string = '';
	let exercises = allExercises;

	interface Exercise {
		name: string;
		description: string;
		concepts: string[];
		// TODO: topics
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

	$: showResults(searchQuery);

	function showResults(queryString: string) {
		// TODO: add text query parsing (using a parsing lib)
		const query = TextRule.parse(queryString);
		exercises = allExercises.filter(exercise => query.match(exercise));
	}

	class Query {
		constructor(rules) {
		}

		match(exercise: Exercise): boolean {
		}

		static parse(query: string): Query {
			const chunks = query.split(/\s/);
			const rules = [];

			for (let i = 0; i < chunks.length; i++) {
				let chunk = chunks[i];
				const Rule = QueryRules.find(Rule => chunk.startsWith(Rule.prefix));
				if (chunk === Rule.prefix && i < chunks.length - 1) {
					chunk += chunks[i+1];
					i++;
				}
				const rule = Rule.parse(chunk);
				rules.push(rule);
			}
			return new Query(rules);
		}
	}

	interface QueryRule {
		match: (exercise: Exercise) => boolean;
		prefix: string;
		static parse: (text: string) => QueryRule;
	}

	class NegatedRule implements QueryRule {
		//rule: QueryRule;

		constructor(rule: QueryRule) {
			this.rule = rule;
		}

		match(exercise: Exercise): boolean {
			return !this.rule.match(exercise);
		}

		static parse(query: string): NegatedRule {
			return new NegatedRule(Query.parse(query.substring(1)));
		}
	}
	NegatedRule.prefix = '-';

	class TextRule implements QueryRule {
		//words: string[];

		constructor(text: string) {
			this.words = text.split().map(word => word.toLowerCase()).filter(w => w);
		}

		match(exercise: Exercise): boolean {
			if (!this.words.length) return true;
			const name = exercise.name.toLowerCase();
			const description = exercise.description.toLowerCase();
			return !!this.words.find(word => name.includes(word) || description.includes(word));
		}

		static parse(query: string): TextRule {
			return new TextRule(query);
		}
	}
	TextRule.prefix = '';

	const QueryRules = [
		NegatedRule,
		TextRule,
	];

	// TODO: add badges for each item in the list
	// TODO: add semi-clever search/filtering capabilities
	// TODO: button to open in NetsBlox (w/ autograding?)
	function getDemoExercises(): Exercise[] {
		const allConcepts = ['lists', 'loops', 'variables', 'events', 'message passing'];
		let exercises = range(10).map(i => ({
			name: `Exercise ${i}`,
			description: `desc ${i}`,
			concepts: uniq(choose(allConcepts, sample(range(4)))),
		}));
		return exercises;
	}
</script>
