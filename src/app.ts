import {processArguments} from "./utils/commands";

// Extract command line arguments skipping the first two (node app.js)
const commandLineArgs = process.argv.slice(2);
const result = processArguments(commandLineArgs);
console.log(result)