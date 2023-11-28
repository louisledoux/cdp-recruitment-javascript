import {describe, expect, it} from "vitest";
import {filterCountriesData, filterPeopleAnimals} from "../services/filter";
import {PeopleType} from "../data/data";
import {mockedCountriesData, mockedFilteredCountriesData, mockedPeopleData} from "./mocks";

describe("filterPeopleAnimals", () => {
  it('should be defined', () => {
    expect(filterPeopleAnimals).toBeDefined();
  });

  it('should return a people with its filtered animals containing the filter condition', () => {
    const filterCondition = "al";

    const result: PeopleType = {
      name: 'Winifred Graham',
      animals: [
        {name: 'Narwhal'},
        {name: 'Narwhalal'}
      ],
    };

    expect(filterPeopleAnimals({ peopleData: mockedPeopleData, filterCondition })).toStrictEqual(result);
  });

  it('should keep the order of animals intact after filtering', () => {
    const filterCondition = "oa";

    const result: PeopleType = {
      name: 'Winifred Graham',
      animals: [
        {name: 'Anoa'},
        {name: 'Crowoa'}
      ],
    };

    expect(filterPeopleAnimals({ peopleData: mockedPeopleData, filterCondition })).toStrictEqual(result);
  });

  it('should not return an animals key if the filtered animals array is empty', () => {
    const filterCondition = "xyz";

    const result: PeopleType = {
      name: 'Winifred Graham',
    };

    expect(filterPeopleAnimals({ peopleData: mockedPeopleData, filterCondition })).toStrictEqual(result);
  });
});

describe("filterCountriesData", () => {
  it('should be defined', () => {
    expect(filterCountriesData).toBeDefined();
  });

  it('should throw an error when an empty filter condition is given', () => {
    const filterCondition = "";
    expect(() => filterCountriesData({ countriesData: mockedCountriesData, filterCondition })).toThrowError();
  });

  it('should return the filtered list of countries and people, with their filtered animals', () => {
    const filterCondition = "ea";
    expect(filterCountriesData({ countriesData: mockedCountriesData, filterCondition })).toStrictEqual(mockedFilteredCountriesData);
  });
});