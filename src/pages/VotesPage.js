import * as React from "react";
import { useCallback, useMemo, useState } from "react";
import { MapControls } from "../components/MapControls";
import { EuropeMap } from "../components/EuropeMap";
import { CountryVotesDrawer } from "../components/CountryVotesDrawer";
import countriesByYear from "../data/countries.json";

const dscYears = Object.keys(countriesByYear).sort().reverse();

export function VotesPage() {
  const [year, setYear] = useState(dscYears[0]); // last year as default
  const [country, setCountry] = useState("Germany");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const yearOptions = useMemo(
    () => dscYears.map((year) => ({ label: year, value: year })),
    [dscYears]
  );

  const handleToggleDrawer = useCallback(
    () => setIsDrawerOpen((isOpen) => !isOpen),
    []
  );
  const handleClickCountry = useCallback((feature) => {
    if (!feature) return;
    const { name_en: country } = feature;
    setIsDrawerOpen(true);
    setCountry(country);
  }, []);

  return (
    <main className="relative grow">
      <MapControls
        yearOptions={yearOptions}
        year={year}
        onSelectYear={setYear}
      />
      <EuropeMap onClickCountry={handleClickCountry} />
      <CountryVotesDrawer
        isOpen={isDrawerOpen}
        country={country}
        onToggle={handleToggleDrawer}
      />
    </main>
  );
}
