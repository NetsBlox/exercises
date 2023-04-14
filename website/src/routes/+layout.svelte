<TopAppBar variant="static" dense={true}>
  <Row>
    <Section>
      <img src="/exercises/full_logo.png" alt="NetsBlox" style="height: 75%">
      <Title style="color: #9d9d9d; font-family: sans-serif; font-style: italic">Exercises</Title>
    </Section>
    <Section align="end" toolbar>
    <a href="/exercises/create" style="text-decoration: none"><IconButton class="material-icons" aria-label="Contribute Exercise" title="Contribute Exercise!">add</IconButton></a>
    </Section>
  </Row>
</TopAppBar>

<script lang="ts">
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
</script>

<slot></slot>

