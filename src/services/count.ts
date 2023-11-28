import {CountryType, PeopleType} from "../data/data";

/**
 * Get the number of animals a people have
 * @param peopleData The original people data with his animals
 * @returns *number* The number of animals
 */
export function countNumberOfAnimalsInPeople(peopleData: PeopleType): number {
  if (!peopleData.animals) return 0;

  return peopleData.animals.length;
}

/**
 * Get the number of people in a country
 * @param countryData The original country data with its people
 * @returns *number* The number of people in the country
 */
export function countNumberOfPeopleInCountry(countryData: CountryType): number {
  if (!countryData.people) return 0;

  return countryData.people.length;
}

type appendCountToParentNameType = {
  name: string,
  countValue: number;
}

/**
 * Append the count to the parent name
 * @param name The parent name
 * @param countValue The children count value
 * @returns *string* The updated parent name with count value appended to it
 */
export function appendCountToParentName({
  name, countValue,
}: appendCountToParentNameType): string {
  if (countValue < 0) throw new Error('Count value cannot be negative');

  return `${name} [${countValue}]`;
}

/**
 * Returns the original data updated with appended counts
 * @param countriesData The original countries data with their people and animals
 * @return *CountryType[]* The updated countries data with counts appended
 */
export function appendChildrenCountsToCountriesData(countriesData: CountryType[]): CountryType[] {
  return countriesData.map(
    (countryData) => {
      const peopleCount = countNumberOfPeopleInCountry(countryData);
      return {
        name: appendCountToParentName({ name: countryData.name, countValue: peopleCount }),
        people: countryData.people?.map(
          (peopleData) => {
            const animalCount = countNumberOfAnimalsInPeople(peopleData);
            return {
              name: appendCountToParentName({ name: peopleData.name, countValue: animalCount }),
              animals: peopleData.animals,
            };
          },
        ),
      };
    },
  );
}