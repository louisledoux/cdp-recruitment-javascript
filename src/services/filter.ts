import {CountryType, PeopleType} from "../data/data";

type filterPeopleAnimalsType = {
  peopleData: PeopleType,
  filterCondition: string,
}
/**
 * Returns people data with a filtered animals list containing the filtering condition string
 * @param peopleData The original people data with all his animals
 * @param filterCondition The filter condition to pick animals containing the string
 * @returns *PeopleType* The people data with his filtered animals list
 */
export function filterPeopleAnimals({
  peopleData, filterCondition,
}: filterPeopleAnimalsType): PeopleType {
  const filteredAnimals = peopleData.animals?.filter((animal) => animal.name.includes(filterCondition));

  if (!filteredAnimals?.length) {
    return {
      name: peopleData.name,
    }
  }
  return {
    ...peopleData,
    animals: filteredAnimals,
  }
}

type filterCountriesDataType = {
  countriesData: CountryType[],
  filterCondition: string,
}
/**
 * Returns the countries data with filtered animals given the filter condition string
 * @param countriesData The original countries data, with their people and animals
 * @param filterCondition The filter condition string to filter the animals
 * @returns The countries list with filtered animals
 */
export function filterCountriesData({
  countriesData, filterCondition,
}: filterCountriesDataType) {
  if (!filterCondition) throw new Error("Filter condition is empty");

  return countriesData.map(
    (country) => ({
      ...country,
      people: country.people?.map(
        (peopleData) => filterPeopleAnimals({ peopleData, filterCondition })
      ),
    })
  );
}