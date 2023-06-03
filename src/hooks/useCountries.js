import { useEffect, useState } from "react";
import countriesByYear from "../data/countries.json";

export const useCountries = (year) => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    if (!year) {
      setCountries([]);
      return;
    }

    const countriesOfYear = countriesByYear[year].map(([code, name]) => ({
      code,
      name,
    }));
    setCountries(countriesOfYear);
  }, [year]);

  return countries;
};
