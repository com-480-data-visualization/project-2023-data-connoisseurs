import * as React from "react";
import { useCallback, useState } from "react";
import { MapControls } from "../components/MapControls";
import { EuropeMap } from "../components/EuropeMap";
import { CountryVotesDrawer } from "../components/CountryVotesDrawer";

export function VotesPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [country, setCountry] = useState("Germany");

  const onCloseDrawer = useCallback(() => setIsDrawerOpen(false), []);
  const onClickCountry = useCallback(({ name_en: country }) => {
    setIsDrawerOpen(true);
    setCountry(country);
  }, []);

  return (
    <main className="relative">
      <aside className="absolute right-0 top-0 z-20 h-full w-1/3">
        <CountryVotesDrawer country={country} onClose={onCloseDrawer} />
      </aside>
      <MapControls />
      <EuropeMap onClickCountry={onClickCountry} />
    </main>
  );
}
