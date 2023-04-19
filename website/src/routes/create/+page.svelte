<div style="margin-left: 2em; margin-right: 2em">
  <h2 style="text-align: center">Submit an Exercise</h2>
  <p style="font-size:1.15em; text-align: center">
  The following form is used to contribute an autograded activity to the official NetsBlox exercises making them easier to be used by others!
  </p>
  <div>
    <h4>Please select an exercise from your NetsBlox autograders:</h4>
  </div>
  <Select items={exercises} bind:value={exercise} groupBy={exercise => exercise.autograder}/>
  <div>
    <Textfield label="Description" style="width: 100%" bind:value={description} input$maxlength={80}>
      <CharacterCounter slot="helper">0 / 80</CharacterCounter>
    </Textfield>
  </div>

  <div>
    <span>Concepts:</span>
    {#each allConcepts as concept}
      <FormField>
        <Checkbox bind:group={concepts} value={concept}/>
        <span slot="label">{concept}</span>
      </FormField>
    {/each}
  </div>

  <div>
    <span>Topics:</span>
    {#each allTopics as topic}
      <FormField>
        <Checkbox bind:group={topics} value={topic}/>
        <span slot="label">{topic}</span>
      </FormField>
    {/each}
  </div>

  <Button on:click={onSubmitClicked} variant="unelevated">
    <Label>Submit Exercise</Label>
  </Button>
  <div style="margin: auto; width: 400px">
  </div>
</div>
<script lang="ts">
  import Select from 'svelte-select';
  import Button, {Label} from '@smui/button';
  import Textfield from '@smui/textfield';
  import CharacterCounter from '@smui/textfield/character-counter';
  import FormField from '@smui/form-field';
  import Checkbox from '@smui/checkbox';
  import allExercises from '../../exercises.json';

  import {onMount} from 'svelte';

  const cloudUrl = 'https://cloud.netsblox.org';

  // TODO: handle errors
  let username;
  let selectedService;
  let exercises = [];
  let exercise;
  let description = '';
  const allConcepts = uniq(allExercises.flatMap(exercise => exercise.concepts));
  const allTopics = uniq(allExercises.flatMap(exercise => exercise.topics || []));
  let concepts = [];
  let topics = [];

  onMount(async () => {
    const opts = {credentials: 'include'};
    let config = await (await fetch(cloudUrl + '/configuration', opts)).json();
    let servicesUrl = config.servicesHosts[0].url;
    username = config.username;

    // TODO: ensure the user is logged in
    if (!username) {
      // TODO
    }

    const services = await (await fetch(`${servicesUrl}/routes/autograders/${username}`)).json();
    const autograders = await Promise.all(
      services.map(service => fetchJson(`${servicesUrl}/routes/autograders/${username}/${service}/config.json`))
    );

    exercises = autograders.flatMap(
      autograder => autograder.assignments.map((assgn, i) => ({
        label: assgn.name,
        autograder: autograder.name,
        starterUrl: assgn['starter template'],
        tests: assgn.tests,
        index: i,
      }))
    );
  });

  async function fetchJson(url): Promise<any> {
    const opts = {credentials: 'include'};
    return await (await fetch(url, opts)).json();
  }

  function onSubmitClicked() {
    console.log('submitting', exercise);
    const title = `New Exercise: ${exercise.label}`;
    const body = JSON.stringify({
      name: exercise.label,
      description,
      concepts,
      topics,
      starterUrl: exercise.starterUrl,
      tests: exercise.tests
    }, null, 2);
    const url = `https://github.com/netsblox/exercises/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}&labels=contributed+exercise`;
    window.open(url, '_blank');
  }

  function uniq<T>(list: T[]): T[] {
    return [... new Set(list)];
  }

</script>
