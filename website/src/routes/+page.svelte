<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<TextField label="Search..." bind:value={searchQuery}>
</TextField>

<script lang="ts">
	import TextField from '@smui/textfield';
	let searchQuery: string = '';

	$: console.log(searchQuery);
	// TODO: fetch the list of exercises?
	// TODO: show them in a list
	// TODO: add badges for each item in the list
	// TODO: add semi-clever search/filtering capabilities
	// TODO: button to open in NetsBlox (w/ autograding?)
</script>
