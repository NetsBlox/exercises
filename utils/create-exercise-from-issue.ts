import { assert } from "https://deno.land/std@0.201.0/assert/mod.ts";
import { parse } from "https://deno.land/x/xml/mod.ts";
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
  tests: Test[];
}

type Test = InputOutputTest;
interface InputOutputTest {
  type: string;
  spec: string;
  inputs: any[];
  output: any;
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
  const blockSpecs = new Set(assgn.tests.map((test) => test.spec));
  const starterFilename = hasParsonsProblem(xml, [...blockSpecs])
    ? "parsons.xml"
    : "template.xml";
  const starterPath = path.join(exerciseDir, starterFilename);
  await Deno.writeTextFile(starterPath, xml);

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

function hasParsonsProblem(xmlString: string, testSpecs: string[]): boolean {
  const xml = parse(xmlString);
  assert(!Array.isArray(xml.room.role), "Multiple roles not yet supported");
  return testSpecs.every((spec) => isParsonsProblem(xml, spec));
}

function isParsonsProblem(xml: any, spec: string): boolean {
  const defs = getBlockDefinitions(xml, spec);
  const blockDef = defs.find((def) => def["@s"] === spec);
  if (!blockDef) {
    throw new Error(`Block definition not found for tested spec: ${spec}`);
  }
  const starterBlocks = blockDef.scripts?.script || blockDef.script?.block ||
    [];
  return starterBlocks.length > 0;
}

function getBlockDefinitions(xml: any, spec: string) {
  const defs = xml.room.role.project.blocks["block-definition"];
  if (!Array.isArray(defs)) {
    return [defs];
  }
  return defs;
}

await Promise.all(Deno.args.map(createExercise));
