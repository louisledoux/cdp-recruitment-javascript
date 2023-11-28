import {describe, expect, it, vi} from "vitest";
import {processArguments} from "../utils/commands";

const methods = {
  filterCountriesData: () => vi.fn(),
}

describe("processArguments", () => {
  it('should be defined', () => {
    expect(processArguments).toBeDefined();
  });

  it('should return an error when no arguments is given in command-line', () => {
    const args: string[] = [];
    expect(() => processArguments(args)).toThrowError();
  });

  it('should return an error when more than one argument is given at the same time', () => {
    const args = ["--filter=ry", "--count"];
    expect (() => processArguments(args)).toThrowError();
  });

  it('should return an error when an incorrect argument is given in command-line', () => {
    const args = ["--xyz"];
    expect(() => processArguments(args)).toThrowError();
  });

  it('should return the response of the filter service when the filter argument is called in command-line', () => {
    const args = ["--filter=ea"];
    expect(processArguments(args)).toBeTypeOf("object");
  });

  it('should return an error when the filter argument is called without parameters in command-line', () => {
    const args = ["--filter"];
    expect(() => processArguments(args)).toThrowError();
  });

  it('should return an error when the filter argument is called with an empty parameter in command-line', () => {
    const args = ["--filter="];
    expect(() => processArguments(args)).toThrowError();
  });

  it('should return the response of the count service when the count argument is called in command-line', () => {
    const args = ["--count"];
    expect(processArguments(args)).toBeTypeOf("object");
  });
})