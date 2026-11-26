// The 3AM Commit Message
// make.fun bounty: u-kiencx-the-3am-commit-message-10bc7b35
//
// Writes one original, deterministic one-line git commit message to
// /output/entry.txt (UTF-8, 83 characters): an AI coding agent at 3am,
// after a long night of fixing its own bugs, reviewing the code its
// own 2am self wrote — and falling out with itself over it.
// No network, no randomness, no input: every run writes identical bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: my 3am self reviewed my 2am self's code and we are no longer on speaking terms";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");
