import * as React from "react";
import Eurovision from "../assets/eurovision-full.svg";

function Card({ title, text }) {
  return (
    <div className="block max-w-sm flex-1 rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
    </div>
  );
}

export function HomePage() {
  const contents = [
    {
      title: "Eurovision Song Contest",
      text: `The Eurovision Song Contest is an annual music competition that unites
        countries from Europe and beyond. Each participating country selects a
        representative or a group to perform an original song on a televised
        stage. Eurovision allows countries to celebrate their cultural
        diversity, fosters friendly competition, and culminates in a thrilling
        voting process where a winner is chosen.`,
    },
    {
      title: "Voting Process",
      text: `The voting process consists of two components: the jury vote and the televote. The jury vote involves a panel of music industry professionals from each participating country who rank their favourite songs. Their votes contribute to 50% of the overall result. The other 50% comes from the televote, where viewers from each country cast their votes to support their favourite entries.`,
    },
    {
      title: "Voting Blocs",
      text: `However, over the years, the contest has witnessed the emergence of voting blocs, where neighbouring countries or regions tend to support each other, sometimes leading to predictable voting patterns. While voting blocs are not officially recognised or encouraged, they have become part of the Eurovision lore, adding a unique element of intrigue and sometimes controversy to the competition`,
    },
    {
      title: "Our Visualization",
      text: `With our visualisation, voting across the years can be analysed and trends can be uncovered, including whether the voting blocs truly exist. Polls can also be explored to see which songs and countries are fan favourites.`,
    },
  ];

  return (
    <div className="flex flex-col space-y-3 px-2">
      <div className="flex flex-col items-center">
        <img
          className="-mb-28 block w-1/2 fill-black p-5 dark:fill-white"
          src={Eurovision}
          alt="Eurovision Song Contest"
        />
        <div className="font-bold">VOTING GRAPHS</div>
      </div>
      <div className="flex flex-row space-x-2">
        {contents.map(({ title, text }) => (
          <Card title={title} text={text} />
        ))}
      </div>
    </div>
  );
}
