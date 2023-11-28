/**
 * Extract arguments and orchestrate app runnable commands
 * @param args string[] The list of provided arguments
 * @returns the results from the asked argument
 */
export function processArguments(args: string[]){
  const allowedArguments = [
    "--filter",
    "--count",
  ];

  if (!args.length) throw new Error('Argument is expected');
  if (args.length > 1) throw new Error('More than one argument was provided. Please provide only one argument at a time');

  // As we allow only one argument at a time, and as an argument always has to
  // be provided, we can be sure to use the first element of the array
  const argument = args[0];

  for (const allowedArgument of allowedArguments) {
    if (argument.includes(allowedArgument)) {
      switch (allowedArgument) {
        case "--filter": {
          const filterCondition = argument.split("=")[1];
          if (!filterCondition) throw new Error('No filter condition provided.');

          return "Filter service";
        }
        case "--count": {
          return "Count service";
        }
      }
    }
  }
  throw new Error('Argument provided is invalid');
}

export function app() {
  // Extract command line arguments skipping the first two (node app.js)
  const commandLineArgs = process.argv.slice(2);
  const result = processArguments(commandLineArgs);
  console.log(result)
}