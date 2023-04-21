<div style="margin-left: 2em; margin-right: 2em">
  <h2 style="text-align: center">Submit an Exercise</h2>
  <p style="font-size:1.15em; text-align: center">
  Interested in contributing an autograded activity to the official NetsBlox exercises? Follow the steps below:
  </p>
  <br/>
  {#if !username}
    <Button on:click={redirectToLogin} variant="unelevated" style="left: 50%;translate: -50%;">
      <Label>Login to NetsBlox</Label>
    </Button>
  {:else}
  <div>
    <h4>Please select an exercise from your NetsBlox autograders:</h4>
  </div>
  <Select items={exercises} bind:value={exercise} groupBy={exercise => exercise.autograder} disabled={!username}/>
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

  <Button on:click={onSubmitClicked} variant="unelevated" disabled={!exercise}  style="left: 50%;translate: -50%;">
    <Label>Submit Exercise</Label>
  </Button>
  <div style="margin: auto; width: 400px">
  </div>
  {/if}
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
  let servicesUrl;

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
    servicesUrl = config.servicesHosts[0].url;

    if (config.username) {
      username = config.username;
      exercises = await fetchExercises(username);
    }
  });

  interface Exercise {
    label: string;
    autograder: string;
    starterUrl: string;
    tests: any[];
    index: number;
  }

  async function fetchExercises(username: string): Exercise[] {
    const services = await (await fetch(`${servicesUrl}/routes/autograders/${username}`)).json();
    const autograders = await Promise.all(
      services.map(service => fetchJson(`${servicesUrl}/routes/autograders/${username}/${service}/config.json`))
    );

    return autograders.flatMap(
      autograder => autograder.assignments.map((assgn, i) => ({
        label: assgn.name,
        autograder: autograder.name,
        starterUrl: assgn['starter template'],
        tests: assgn.tests,
        index: i,
      }))
    );
  }

  async function fetchJson(url): Promise<any> {
    const opts = {credentials: 'include'};
    return await (await fetch(url, opts)).json();
  }

  function onSubmitClicked() {
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

  function redirectToLogin() {
    const here = window.location.href;
    const url = `https://login.dev.netsblox.org?redirect=${encodeURIComponent(here)}`
    window.open(url);
  }

  function uniq<T>(list: T[]): T[] {
    return [... new Set(list)];
  }

</script>
