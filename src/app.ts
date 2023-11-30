import { processArguments } from "./utils/commands";
import util from "util";

// Extract command line arguments skipping the first two (node app.js)
const commandLineArgs = process.argv.slice(2);
const result = processArguments(commandLineArgs);
console.log(
  util.inspect(result, { showHidden: false, depth: null, colors: true }),
);
