import * as path from "https://deno.land/std/path/mod.ts";
const __filename = path.fromFileUrl(import.meta.url);
const __dirname = path.dirname(__filename);
const exercisesDir = path.join(__dirname, "..", "exercises");

interface ExerciseDesc {
  name: string;
  description: string;
  concepts: string[];
  topics: string[];
  starterUrl: string;
  tests: any[];
}

async function createExercise(filename: string): Promise<void> {
  const desc: ExerciseDesc = JSON.parse(await Deno.readTextFile(filename));

  // TODO: create the directory name
  const dirname = desc.name.toLowerCase()
    .replace(/[^a-z]+/g, "-")
    .replace(/-$/, "")
    .replace(/^-/, "");
  const exerciseDir = path.join(exercisesDir, dirname);

  await Deno.mkdir(exerciseDir);

  // Fetch the starter project
  const response = await fetch(desc.starterUrl);
  const xml = await response.text();
  const parsonsPath = path.join(exerciseDir, "parsons.xml");
  await Deno.writeTextFile(parsonsPath, xml);

  // FIXME: is it a parson's problem?

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
