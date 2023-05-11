import * as React from "react";
import { useCallback, useState } from "react";
import { MapControls } from "../components/MapControls";
import { EuropeMap } from "../components/EuropeMap";
import { CountryVotesDrawer } from "../components/CountryVotesDrawer";

export function VotesPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [country, setCountry] = useState("Germany");

  const onToggleDrawer = useCallback(
    () => setIsDrawerOpen((isOpen) => !isOpen),
    []
  );
  const onClickCountry = useCallback((feature) => {
    if (!feature) return;
    const { name_en: country } = feature;
    setIsDrawerOpen(true);
    setCountry(country);
  }, []);

  return (
    <main className="relative grow">
      <MapControls />
      <EuropeMap onClickCountry={onClickCountry} />
      <CountryVotesDrawer
        isOpen={isDrawerOpen}
        country={country}
        onToggle={onToggleDrawer}
      />
    </main>
  );
}
