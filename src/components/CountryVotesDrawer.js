import * as React from "react";
import { useState } from "react";
import {
  DrawerActions,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  DrawerSection,
} from "@patternfly/react-core";
import {
  CloseButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export function CountryVotesDrawer({ country, onClose }) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <DrawerPanelContent className="p-3">
      <DrawerHead className="mb-2">
        <h5 className="text-start">{country}</h5>
        <DrawerActions>
          <CloseButton onClick={onClose} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <DrawerSection>
          <Tabs
            variant="line"
            colorScheme="teal"
            // align="center"
            // isFitted
            isLazy
            index={tabIndex}
            onChange={setTabIndex}
          >
            <TabList>
              <Tab key="cast-votes"> Cast Votes </Tab>
              <Tab key="received-votes">Received Votes</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>// TODO: votes out by country bar charts</TabPanel>
              <TabPanel>// TODO: votes in by country bar charts</TabPanel>
            </TabPanels>
          </Tabs>
        </DrawerSection>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );
}
