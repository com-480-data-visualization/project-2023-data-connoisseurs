import * as React from "react";
import { useCallback, useMemo, useState } from "react";
import { MapControls } from "../components/MapControls";
import { CountryVotesDrawer } from "../components/CountryVotesDrawer";
import countriesByYear from "../data/countries.json";
import juryVotesIn from "../data/jury_votes_in.json";
import juryVotesOut from "../data/jury_votes_out.json";
import teleVotesIn from "../data/televotes_in.json";
import teleVotesOut from "../data/televotes_out.json";
import { AustraliaMap } from "../components/AustraliaMap";
import { EuropeMap } from "../components/EuropeMap";

const dscYears = Object.keys(countriesByYear).sort().reverse();

export const VoteDirection = {
  IN: "in",
  OUT: "out",
};

export const VoteType = {
  TELE: "tele",
  JURY: "jury",
};

export function VotesPage() {
  const [year, setYear] = useState(dscYears[0]); // last year as default
  const [direction, setDirection] = useState(VoteDirection.IN);
  const [type, setType] = useState(VoteType.TELE);

  const [country, setCountry] = useState({ name: "Switzerland", code: "CH" });
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
  const countries = useMemo(
    () => countriesByYear[year].map(([code]) => code),
    [year]
  );
  const votes = useMemo(() => {
    const format = ([countryCode, points]) => ({
      country: countryCode,
      points: points,
    });
    let dataset = {};
    if (type === VoteType.JURY && direction === VoteDirection.IN)
      dataset = juryVotesIn;
    else if (type === VoteType.JURY && direction === VoteDirection.OUT)
      dataset = juryVotesOut;
    else if (type === VoteType.TELE && direction === VoteDirection.IN)
      dataset = teleVotesIn;
    else if (type === VoteType.TELE && direction === VoteDirection.OUT)
      dataset = teleVotesOut;

    console.log(dataset);
    console.log(year);
    console.log(direction);
    console.log(type);
    console.log(dataset[year][country.code]?.map(format));

    return dataset[year][country.code]?.map(format);
  }, [year, country, direction, type]);

  const handleToggleDrawer = useCallback(
    () => setIsDrawerOpen((isOpen) => !isOpen),
    []
  );
  const handleClickCountry = useCallback((feature) => {
    if (!feature) return;

    console.log(feature);

    const { name_en, iso_3166_1 } = feature;
    setIsDrawerOpen(true);
    setCountry({ name: name_en, code: iso_3166_1 });
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
      <EuropeMap
        countries={countries}
        handleClickCountry={handleClickCountry}
      />
      <div className="absolute bottom-0 left-0 z-10 h-36 w-36 shadow">
        <AustraliaMap handleClickCountry={handleClickCountry} />
      </div>
      <CountryVotesDrawer
        data={votes}
        direction={direction}
        type={type}
        isOpen={isDrawerOpen}
        country={country}
        handleToggle={handleToggleDrawer}
      />
    </main>
  );
}
