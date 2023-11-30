import { describe, expect, it } from "vitest";
import { filterCountriesData, filterPeopleAnimals } from "../services/filter";
import { PeopleType } from "../data/data";
import {
  countriesTestData,
  filteredCountriesExpectedData,
  peopleTestData,
} from "./testDatas";

describe("filterPeopleAnimals", () => {
  it("should be defined", () => {
    expect(filterPeopleAnimals).toBeDefined();
  });

  it("should return a people with its filtered animals containing the filter condition", () => {
    const filterCondition = "al";

    const expectedResult: PeopleType = {
      name: "Winifred Graham",
      animals: [{ name: "Narwhal" }, { name: "Narwhalal" }],
    };

    expect(
      filterPeopleAnimals({ peopleData: peopleTestData, filterCondition }),
    ).toStrictEqual(expectedResult);
  });

  it("should keep the order of animals intact after filtering", () => {
    const filterCondition = "oa";

    const expectedResult: PeopleType = {
      name: "Winifred Graham",
      animals: [{ name: "Anoa" }, { name: "Crowoa" }],
    };

    expect(
      filterPeopleAnimals({ peopleData: peopleTestData, filterCondition }),
    ).toStrictEqual(expectedResult);
  });

  it("should not return an animals key if the filtered animals array is empty", () => {
    const filterCondition = "xyz";

    const expectedResult: PeopleType = {
      name: "Winifred Graham",
    };

    expect(
      filterPeopleAnimals({ peopleData: peopleTestData, filterCondition }),
    ).toStrictEqual(expectedResult);
  });
});

describe("filterCountriesData", () => {
  it("should be defined", () => {
    expect(filterCountriesData).toBeDefined();
  });

  it("should throw an error when an empty filter condition is given", () => {
    const filterCondition = "";
    expect(() =>
      filterCountriesData({
        countriesData: countriesTestData,
        filterCondition,
      }),
    ).toThrowError();
  });

  it("should return the filtered list of countries and people, with their filtered animals", () => {
    const filterCondition = "ea";
    expect(
      filterCountriesData({
        countriesData: countriesTestData,
        filterCondition,
      }),
    ).toStrictEqual(filteredCountriesExpectedData);
  });
});
