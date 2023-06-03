import { useEffect, useState } from "react";
import juryVotesIn from "../data/jury_votes_in.json";
import juryVotesOut from "../data/jury_votes_out.json";
import teleVotesIn from "../data/televotes_in.json";
import teleVotesOut from "../data/televotes_out.json";
import { Direction, Type } from "../pages/VotesPage";

export const useVotesData = (year, countryCode, direction, type) => {
  const [dataSet, setDataSet] = useState(null);

  useEffect(() => {
    const extract = (ds) => {
      const format = ([countryCode, points]) => ({ countryCode, points });
      return ds[year]?.[countryCode]?.map(format);
    };

    if (type === Type.JURY) {
      if (direction === Direction.IN) setDataSet(extract(juryVotesIn));
      else if (direction === Direction.OUT) setDataSet(extract(juryVotesOut));
    } else if (type === Type.TELE) {
      if (direction === Direction.IN) setDataSet(extract(teleVotesIn));
      else if (direction === Direction.OUT) setDataSet(extract(teleVotesOut));
    } else {
      setDataSet(null);
      console.error("unknown direction and/or type");
    }
  }, [year, countryCode, direction, type]);

  return dataSet;
};
