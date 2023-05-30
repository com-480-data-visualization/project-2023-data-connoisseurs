import * as React from "react";
import { useCallback, useMemo, useState } from "react";
import { MapControls } from "../components/MapControls";
import { EuropeMap } from "../components/EuropeMap";
import { CountryVotesDrawer } from "../components/CountryVotesDrawer";
import countriesByYear from "../data/countries.json";

const dscYears = Object.keys(countriesByYear).sort().reverse();

export const VoteDirection = {
  IN: "votes-in",
  OUT: "votes-out",
};

export const VoteType = {
  TELE: "votes-tele",
  JURY: "votes-jury",
};

export function VotesPage() {
  const [year, setYear] = useState(dscYears[0]); // last year as default
  const [direction, setDirection] = React.useState(VoteDirection.IN);
  const [type, setType] = React.useState(VoteType.TELE);

  const [country, setCountry] = useState("Germany");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const yearOptions = useMemo(
    () => dscYears.map((year) => ({ label: year, value: year })),
    [dscYears]
  );
  const directionOptions = useMemo(
    () => [
      { value: VoteDirection.IN, label: "Votes In" },
      { value: VoteDirection.OUT, label: "Votes Out" },
    ],
    []
  );
  const typeOptions = useMemo(
    () => [
      { value: VoteType.TELE, label: "Tele" },
      { value: VoteType.JURY, label: "Jury" },
    ],
    []
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
        year={year}
        yearOptions={yearOptions}
        onSelectYear={setYear}
        direction={direction}
        directionOptions={directionOptions}
        onSelectDirection={setDirection}
        type={type}
        typeOptions={typeOptions}
        onSelectType={setType}
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
