import {appendChildrenCountsToCountriesData} from "../services/count";
import {filterCountriesData} from "../services/filter";
import {data} from "../data/data";

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

          return filterCountriesData({ countriesData: data, filterCondition });
        }
        case "--count": {
          return appendChildrenCountsToCountriesData(data);
        }
      }
    }
  }
  throw new Error('Argument provided is invalid');
}
