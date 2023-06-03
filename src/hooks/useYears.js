import { useEffect, useState } from "react";
import countriesByYear from "../data/countries.json";

export const useYears = (isDescending) => {
  const [years, setYears] = useState(null);

  useEffect(() => {
    const sortedYears = Object.keys(countriesByYear).sort();
    setYears(isDescending ? sortedYears.reverse() : sortedYears);
  }, []);

  return years;
};
