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
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const data = [
  {country: 1, points: 1},
  {country: 2, points: 2},
  {country: 3, points: 3},
  {country: 4, points: 4},
  {country: 5, points: 5},
  {country: 6, points: 6},
  {country: 7, points: 7},
  {country: 8, points: 8},
  {country: 9, points: 10},
  {country: 10, points: 12}
];

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
              <TabPanel>
                <VictoryChart
                  theme={VictoryTheme.material}
                  domainPadding={{x:5}}
                >
                  <VictoryAxis
                    tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    tickFormat={["UA", "PL", "BE", "CZ", "FR", "FI", "NL", "IT", "SE", "GB"]}
                  />
                  <VictoryBar horizontal
                    data={data}
                    x="country"
                    y="points"
                    labels={({ datum }) => datum.points}
                  />
                </VictoryChart>
              </TabPanel>
              <TabPanel>// TODO: votes in by country bar charts</TabPanel>
            </TabPanels>
          </Tabs>
        </DrawerSection>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );
}
