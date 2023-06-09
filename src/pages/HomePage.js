import * as React from "react";
import Eurovision from "../assets/eurovision-full.svg";
import { Path } from "../App";

function Card({ title, text }) {
  return (
    <div className="group block max-w-sm flex-1 rounded-lg border border-primary bg-white p-6 shadow hover:border-primary hover:bg-gray-100 ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">
        {title}
      </h5>
      <p className="font-normal ">{text}</p>
    </div>
  );
}

export function HomePage() {
  const RightArrow = () => (
    <svg
      className="inline-block h-4 w-4"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
      ></path>
    </svg>
  );

  const Link = (href, label) => (
    <div className="block flex flex-row items-center justify-center space-x-1">
      {RightArrow()}
      <span>
        See
        <a className="text-secondary" href={`#${href}`}>
          {` ${label}`}
        </a>
      </span>
    </div>
  );

  const contents = [
    {
      title: "Song Contest",
      text: (
        <>
          The Eurovision Song Contest is an
          <span className="group-hover:text-accent">
            {" annual music competition "}
          </span>
          that unites countries from Europe and beyond. Each participating
          country selects a representative or a group to perform an original
          song on a televised stage. Eurovision allows countries to celebrate
          their cultural diversity, fosters friendly competition, and culminates
          in a thrilling voting process where a winner is chosen.
        </>
      ),
    },
    {
      title: "Voting Process",
      text: (
        <>
          The voting process consists of two components: the jury vote and the
          televote. The
          <span className="group-hover:text-accent"> jury vote </span>involves a
          panel of music industry professionals from each participating country
          who rank their favourite songs. Their votes contribute to 50% of the
          overall result. The other 50% comes from the
          <span className="group-hover:text-accent"> televote</span>, where
          viewers from each country cast their votes to support their favourite
          entries.
        </>
      ),
    },
    {
      title: "Voting Blocs",
      text: (
        <>
          However, over the years, the contest has witnessed the emergence of
          voting blocs, where
          <span className="group-hover:text-accent">
            {" neighbouring countries or regions tend to support each other"}
          </span>
          , sometimes leading to predictable voting patterns. While voting blocs
          are not officially recognised or encouraged, they have become part of
          the Eurovision lore, adding a unique element of intrigue and sometimes
          controversy to the competition.
        </>
      ),
    },
    {
      title: "Our Visualizations",
      text: (
        <>
          With our visualisations, voting across the years can be analysed and
          <span className="group-hover:text-accent">
            {" trends can be uncovered"}
          </span>
          , including whether the voting blocs truly exist. Polls can also be
          explored to see which songs and countries are fan favourites.
          <br />
          <br />
          {Link(Path.Votes, "Votes")}
          {Link(Path.Polls, "Polls")}
        </>
      ),
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
          <Card key={title} title={title} text={text} />
        ))}
      </div>
    </div>
  );
}
