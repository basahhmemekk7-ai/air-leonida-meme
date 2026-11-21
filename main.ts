// Air Leonida — entry program for make.fun's gta6-meme-x-01 bounty.
//
// The post itself is the entry: the house reads the X post named in POST.json
// and judges its first picture plus its text. This program only has to hand
// POST.json over, so the grader can find it: it copies the file from the
// repository root into the output directory.
//
// It runs with no network, no wall clock and no files outside the repository,
// and both runs of an entry write the same bytes.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The grader sets these; the defaults let the program run from the repo root.
// Both resolve relative to the working directory, which is the repo root when
// the grader runs it, so no path here ever escapes the repository.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "POST.json"), join(outDir, "POST.json"));
