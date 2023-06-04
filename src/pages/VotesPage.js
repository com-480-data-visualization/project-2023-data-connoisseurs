import * as React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { MapControls } from "../components/MapControls";
import { useYears } from "../hooks/useYears";
import { useCountries } from "../hooks/useCountries";
import { useVotesData } from "../hooks/useVotesData";
import { useCountryCoordinates } from "../hooks/useCountryCoordinates";
import { EuropeMap } from "../components/EuropeMap";
import { AustraliaMap } from "../components/AustraliaMap";
import { CountryVotesDrawer } from "../components/CountryVotesDrawer";

export const Direction = {
  IN: "in",
  OUT: "out",
};

export const Type = {
  TELE: "tele",
  JURY: "jury",
};

export const DirectionOptions = [
  { value: Direction.IN, label: "Votes In" },
  { value: Direction.OUT, label: "Votes Out" },
];

export const TypeOptions = [
  { value: Type.TELE, label: "Tele" },
  { value: Type.JURY, label: "Jury" },
];

export function VotesPage() {
  // todo replace with useReducer() & dispatch to handle form data
  const years = useYears();
  const [year, setYear] = useState();

  // last year as default
  useEffect(() => {
    if (!years) return;
    year || setYear(years[0]);
  }, [years, year]);

  const eurovisionCountries = useCountries(year);
  const eurovisionCountryCodes = useMemo(() => {
    return eurovisionCountries?.map(({ code }) => code);
  }, [eurovisionCountries]);

  const [direction, setDirection] = useState(Direction.IN);
  const [type, setType] = useState(Type.TELE);

  const [country, setCountry] = useState({ name: "Switzerland", code: "CH" });
  const countryVotesData = useVotesData(year, country.code, direction, type);

  const selectedCountryName = useMemo(() => [country.name], [country]);
  const selectedCountryCoordinates =
    useCountryCoordinates(selectedCountryName)?.[0];

  const connectedCountriesNames = useMemo(() => {
    return countryVotesData?.map(
      ({ countryCode }) =>
        eurovisionCountries?.find(({ code }) => code === countryCode)?.name
    );
  }, [countryVotesData, eurovisionCountries]);
  const connectedCountriesCoordinates = useCountryCoordinates(
    connectedCountriesNames
  );

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const yearOptions = useMemo(
    () => (years ? years.map((year) => ({ label: year, value: year })) : []),
    [years]
  );

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

  const arrowsCoordinates = useMemo(() => {
    if (direction === Direction.OUT) {
      return connectedCountriesCoordinates?.map((coord) => [
        selectedCountryCoordinates,
        coord,
      ]);
    } else if (direction === Direction.IN) {
      return connectedCountriesCoordinates?.map((coord) => [
        coord,
        selectedCountryCoordinates,
      ]);
    } else return null;
  }, [selectedCountryCoordinates, connectedCountriesCoordinates, direction]);

  return (
    <main className="relative grow">
      <MapControls
        year={year}
        yearOptions={yearOptions}
        onSelectYear={setYear}
        direction={direction}
        directionOptions={DirectionOptions}
        onSelectDirection={setDirection}
        type={type}
        typeOptions={TypeOptions}
        onSelectType={setType}
      />
      <EuropeMap
        highlightCountries={eurovisionCountryCodes}
        handleClickCountry={handleClickCountry}
        arrowsCoordinates={arrowsCoordinates}
      />
      <div className="absolute bottom-0 left-0 z-10 h-36 w-36 shadow">
        <AustraliaMap handleClickCountry={handleClickCountry} />
      </div>
      <CountryVotesDrawer
        data={countryVotesData}
        direction={direction}
        type={type}
        isOpen={isDrawerOpen}
        country={country}
        handleToggle={handleToggleDrawer}
      />
    </main>
  );
}
