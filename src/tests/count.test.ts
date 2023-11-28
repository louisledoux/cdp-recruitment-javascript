import {describe, expect, it} from "vitest";
import {
  appendChildrenCountsToCountriesData,
  appendCountToParentName,
  countNumberOfAnimalsInPeople,
  countNumberOfPeopleInCountry
} from "../services/count";
import {CountryType, PeopleType} from "../data/data";
import {mockedCountriesData, mockedCountriesDataWithCounts, mockedCountryData, mockedPeopleData} from "./mocks";

describe("countNumberOfAnimalsInPeople", () => {
  it('should be defined', () => {
    expect(countNumberOfAnimalsInPeople).toBeDefined();
  });

  it('should return 0 if the animal key does not exist', () => {
    const peopleData: PeopleType = {
      name: 'Adam Sanders',
    };

    const result = 0;

    expect(countNumberOfAnimalsInPeople(peopleData)).toBe(result);
  });

  it('should return the number of animals in the people', () => {
    const result = 8;
    expect(countNumberOfAnimalsInPeople(mockedPeopleData)).toBe(result);
  });
});

describe("countNumberOfPeopleInCountry", () => {
  it('should be defined', () => {
    expect(countNumberOfPeopleInCountry).toBeDefined();
  })

  it('should return 0 if the people key does not exist', () => {
    const countryData: CountryType = {
      name: 'Eorzea',
    }
    const result = 0;
    expect(countNumberOfPeopleInCountry(countryData)).toBe(result);
  });

  it('should return the number of people in the country', () => {
    const result = 5;
    expect(countNumberOfPeopleInCountry(mockedCountryData)).toBe(result);
  });
})


describe("appendCountToParentName", () => {
  it('should be defined', () => {
    expect(appendCountToParentName).toBeDefined();
  });

  it('should throw an error if the number is negative', () => {
    const name = 'Eorzea';
    const countValue = -1;

    expect(() => appendCountToParentName({ name, countValue })).toThrowError();
  });

  it('should return updated name with the count value appended to it', () => {
    const name = 'Eorzea';
    const countValue = 2;

    const result = `${name} [${countValue}]`;

    expect(appendCountToParentName({ name, countValue })).toBe(result);
  });
});

describe("appendChildrenCountsToCountriesData", () => {
  it('should be defined', () => {
    expect(appendChildrenCountsToCountriesData).toBeDefined();
  });

  it('should return the updated countries data with counts appended', () => {
    expect(appendChildrenCountsToCountriesData(mockedCountriesData)).toStrictEqual(mockedCountriesDataWithCounts);
  });
})