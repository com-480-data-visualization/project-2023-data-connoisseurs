import { useEffect, useState } from "react";
import juryVotesIn from "../data/jury_votes_in.json";
import juryVotesOut from "../data/jury_votes_out.json";
import teleVotesIn from "../data/televotes_in.json";
import teleVotesOut from "../data/televotes_out.json";
import { Direction, Type } from "../pages/VotesPage";

export const useVotesData = (year, countryCode, direction, type) => {
  const [dataSet, setDataSet] = useState(null);

  useEffect(() => {
    if (type === Type.JURY) {
      if (direction === Direction.IN) setDataSet(juryVotesIn);
      else if (direction === Direction.OUT) setDataSet(juryVotesOut);
    } else if (type === Type.TELE) {
      if (direction === Direction.IN) setDataSet(teleVotesIn);
      else if (direction === Direction.OUT) setDataSet(teleVotesOut);
    } else {
      setDataSet(null);
      console.error("unknown direction and/or type");
    }
  }, [year, countryCode, direction, type]);

  const format = ([countryCode, points]) => ({ countryCode, points });
  return dataSet?.[year]?.[countryCode]?.map(format);
};
