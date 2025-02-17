import { countries } from "@/data/countryData";

export const findCountry = (name) => {
  const find = !name
    ? { name: "World", code: "world" }
    : name === "World"
    ? { name, code: name }
    : countries?.find((country) => country?.name === name);
  return find;
};
