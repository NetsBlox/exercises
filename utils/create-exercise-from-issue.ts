import * as path from "https://deno.land/std/path/mod.ts";
const __filename = path.fromFileUrl(import.meta.url);
const __dirname = path.dirname(__filename);
const exercisesDir = path.join(__dirname, "..", "exercises");

interface ExerciseDesc {
  host: string;
  username: string;
  autograder: string;
  name: string;
  description: string;
  concepts: string[];
  topics: string[];
}

interface Autograder {
  name: string;
  assignments: Assignment[];
}

interface Assignment {
  name: string;
  "starter template": string;
  tests: any[];
}

async function getAssignment(desc: ExerciseDesc): Promise<Assignment> {
  const grader: Autograder = await fetchJson(
    `${desc.host}/routes/autograders/${desc.username}/${desc.autograder}/config.json`,
  );
  const assgn = grader.assignments.find((assgn: Assignment) =>
    assgn.name === desc.name
  );
  if (!assgn) {
    throw new Error(`Assignment ${desc.name} not found in ${desc.autograder}`);
  }
  return assgn;
}

async function fetchJson(url: string): Promise<any> {
  const response = await fetch(url);
  return await response.json();
}

async function createExercise(filename: string): Promise<void> {
  const desc: ExerciseDesc = JSON.parse(await Deno.readTextFile(filename));

  // create the directory
  const dirname = desc.name.toLowerCase()
    .replace(/[^a-z]+/g, "-")
    .replace(/-$/, "")
    .replace(/^-/, "");
  const exerciseDir = path.join(exercisesDir, dirname);

  await Deno.mkdir(exerciseDir);

  // Look up the assignment details
  const assgn = await getAssignment(desc);
  const starterUrl = assgn["starter template"];

  // Fetch the starter project
  const response = await fetch(starterUrl);
  const xml = await response.text();
  const parsonsPath = path.join(exerciseDir, "parsons.xml");
  await Deno.writeTextFile(parsonsPath, xml);

  // FIXME: is it a parson's problem?

  // Save the tests
  const testsPath = path.join(exerciseDir, "tests.json");
  await Deno.writeTextFile(testsPath, JSON.stringify(assgn.tests, null, 2));

  // Save the metadata file
  const metadata = Object.entries({
    name: desc.name,
    description: desc.description,
    concepts: desc.concepts,
    topics: desc.topics,
  })
    .map(([name, value]) => `${name} = ${JSON.stringify(value)}`)
    .join("\n");

  const metadataPath = path.join(exerciseDir, "metadata.toml");
  await Deno.writeTextFile(metadataPath, metadata);
}

await Promise.all(Deno.args.map(createExercise));
