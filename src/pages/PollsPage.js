import React from "react";
import "./PollsPage.css";
import "../components/DropdownMenu.css";
import { useCallback, useMemo, useState } from "react";
import countriesByYear from "../data/countries.json";
import eurovisionworldByYear from "../data/eurovisionworld_by_year.json";
import ogaeByYear from "../data/ogae_by_year.json";
import eurovisionworldByCountry from "../data/eurovisionworld_by_country.json";
import ogaeByCountry from "../data/ogae_by_country.json";
import {RankingControl} from "../components/RankingControl";
import {Rankings} from "../components/Rankings";
import {CountryPollsDrawer} from "../components/CountryPollsDrawer";


const dscYears = Object.keys(countriesByYear).sort().reverse();

export const PollSource = {
  Eurovisionworld: "Eurovisionworld",
  OGAE: "OGAE",
};

export function PollsPage() {
    const [year, setYear] = useState(dscYears[0]); // last year as default
    const [pollSource, setPollSource] = React.useState(
        PollSource.Eurovisionworld
    );

    const [country, setCountry] = useState({ name: "Switzerland", code: "CH" });
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const yearOptions = useMemo(
        () => dscYears.map((year) => ({ label: year, value: year })),
          [dscYears]
    );
    const pollSourceOptions = useMemo(
        () => [
            {value: PollSource.Eurovisionworld, label: "Eurovisionworld"},
            {value: PollSource.OGAE, label: "OGAE"},
        ],
        []
    );

    const pollsYear = useMemo( () => {
        const format = ([countryCode, points]) => ({
            country: countryCode,
            points: points,
        });
        let dataset = [];
        if (pollSource === PollSource.Eurovisionworld)
            dataset = eurovisionworldByYear;
        else if (pollSource === PollSource.OGAE)
            dataset = ogaeByYear;

        console.log(dataset[year]);
        return dataset[year].map(format);
    }, [year, pollSource]);

    const pollsCountry = useMemo(() => {
        const format = ([year, points]) => ({
            year: year,
            points: points,
        });
        let dataset = [];
        if (pollSource === PollSource.Eurovisionworld)
            dataset = eurovisionworldByCountry;
        else if (pollSource === PollSource.OGAE)
            dataset = ogaeByCountry;

        console.log("pollsCountry",country);
        return dataset[country[0]]?.map(format);
    }, [country, pollSource]);


    const handleToggleDrawer = useCallback(
        () => setIsDrawerOpen((isOpen) => !isOpen),
        []
    );

    const handleClickCountry = useCallback((countryCode) => {
        setIsDrawerOpen(true);
        setCountry(countriesByYear[year].find(([code]) => code === countryCode));
        console.log(country);
        console.log(country.name);
    }, []);


  return (
      <main className="relative grow">
          <RankingControl
                year={year}
                yearOptions={yearOptions}
                onSelectYear={setYear}
                pollSource={pollSource}
                pollSourceOptions={pollSourceOptions}
                onSelectPollSource={setPollSource}
          />
          <Rankings
              data={pollsYear}
              pollSource={pollSource}
              handleClickCountry={handleClickCountry}
          />
          <CountryPollsDrawer
              data={pollsCountry}
              isOpen={isDrawerOpen}
              handleToggle={handleToggleDrawer}
              country={country}
            />
      </main>
  );
}


