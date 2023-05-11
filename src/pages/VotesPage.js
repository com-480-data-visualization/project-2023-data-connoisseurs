import * as React from "react";
import { useCallback, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerContentBody,
} from "@patternfly/react-core";
import { CountryVotesDrawer } from "../components/CountryVotesDrawer";
import { EuropeMap } from "../components/EuropeMap";
import { MapControls } from "../components/MapControls";

export function VotesPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [country, setCountry] = useState("Germany");

  const onCloseDrawer = useCallback(() => setIsDrawerOpen(false), []);
  const onClickCountry = useCallback(({ name_en: country }) => {
    setIsDrawerOpen(true);
    setCountry(country);
  }, []);

  return (
    <Drawer isExpanded={isDrawerOpen}>
      <DrawerContent
        panelContent={
          <CountryVotesDrawer country={country} onClose={onCloseDrawer} />
        }
      >
        <DrawerContentBody className="position-relative">
          <MapControls />
          <EuropeMap onClickCountry={onClickCountry} />
        </DrawerContentBody>
      </DrawerContent>
    </Drawer>
  );
}
