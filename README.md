# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Anton Hosgood  | 302242 |
| Jiabao Wen     | 315294 |
| Zhe Xiong      | 338700 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2)
• [Milestone 3](#milestone-3)

Welcome to our COM-480 Data Visualization Project!

The aim of this project is to visualise the voting in
the [Eurovision Song Contest](https://en.wikipedia.org/wiki/Eurovision_Song_Contest)
.
The voting process in Eurovison is very contentious, with the fan favourite
often not ending up as the winner.
We hope that our website will make it easier for people interested in Eurovision
to explore the voting and fan polls and potentially discover hidden voting
patterns.

Visit our
website [here](https://com-480-data-visualization.github.io/project-2023-data-connoisseurs/)
to learn more about the problems behind the current Eurovision voting system and
discover some voting patterns yourself!

Otherwise, if you are in a hurry, feel free to watch our
screencast [here](https://youtu.be/ei0vqu_CyJ8) where we quickly go over our website.

Finally, if you would look to learn more about the creative reasoning and design
of our website, we invite you to take a look at our process
book [here](https://github.com/com-480-data-visualization/project-2023-data-connoisseurs/blob/master/process_book.pdf)
. Additionally, you can read the sections [Milestone 1](#milestone-1)
and [Milestone 2](#milestone-2) to learn more.

## Milestone 1 (7th April, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project
and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

### Dataset

https://www.kaggle.com/datasets/diamondsnake/eurovision-song-contest-data

The dataset contains data from the editions of Eurovision since 2016:

- Final results
    - Jury vote results from each participating country
    - Public vote results from each participating country
- Polls
    - Predicted winning country by fans
      on [Eurovisionworld](https://eurovisionworld.com/)
    - Favourite songs of fans on [OGAE](https://ogaeinternational.org/)
- Basic data on each edition of Eurovision
- Geographic region of each country
- Basic data on each entry

### Problematic

The Eurovision Song Contest is the most popular international music competition,
with millions of viewers tuning in every year to watch the performances and vote
for their favourite countries. As a data visualisation project, the goal is to
provide insights into how countries vote for each other and the factors that
influence their decisions.

The main axis that will be developed for this visualisation project is based on
the following question and objectives:

> What is the main goal of your visualisation?

- To show which countries vote for each other
- To visualise the differences between the results of polls and the actual
  results
- To compare the jury vote and televote
- To identify possible hidden factors (such as geographic or linguistic
  closeness) that influence one country to vote for another
- To show how the voting patterns have evolved over time
- To show if certain countries prefer specific genres

The project aims to provide an overview of the Eurovision Song Contest,
including an analysis of the voting patterns through visualisation, as well as
the factors that may influence the voting process. The target audience includes
Eurovision fans, people interested in data analysis, and anyone who enjoys
visualising complex data.

### Exploratory Data Analysis

Pre-processing of the chosen dataset is an important step in the data analysis
process, as it allows us to identify data quality issues and perform data
cleaning to ensure that the dataset is ready for analysis.

The exploratory data analysis phase will involve the following:

- Show basic statistics and provide insights about the data, including data
  distribution, data types, and data quality checks

The exploratory data analysis has been carried out in `eda.py`. The dataset, for
the most part, does not require any cleaning (besides `song_data.csv` which
contains some missing values). It will become more apparent later on to what
extent this will be important in our visualisation, since we cannot impute the
values nor does it make sense to remove these rows. It will, however, need to be
pre-processed a bit to get it into a format usable for our visualisation.

### Related work

The Eurovision Song Contest has been analysed by several researchers in the
past, and their work provides a valuable source of inspiration for this project.
This section discusses related work:

> What have others already done with the data?

Topics worked on using similar datasets:

- Untangling strategic voting, neighbour preferences, and political rivalries
- Is there any bias in voting?
- What is the most influential country in the competition?
- Are the countries organised in communities?
- Are the countries organised by cultural affinity (e.g. by language)?
- Is geographical distance important?

> How is your approach original?

- The ultimate goal is to create a dynamic visualisation for analysis
- The approach includes dynamic interactions with the graphs instead of static
  graphs
- We will be able to answer multiple questions simultaneously using a single
  visualisation

> What source of inspiration did you take? This includes visualisations from
> other websites or magazines that may be unrelated to your data.

Two sources of inspiration include:

- https://memgraph.com/blog/analyzing-the-eurovision-song-contest-with-graphs
- https://www.kaggle.com/code/jeleandro/network-analysis-applied-to-eurovision

These sources provide valuable insight into the analysis of the Eurovision Song
Contest, which can be used to develop our approach for this project, and provide
us with an insight into how our visualisation might look.

Overall, this project aims to provide an analysis through visualisation of the
Eurovision Song Contest, including a deep dive into the voting patterns and
factors that influence the voting process. The visualisation will be dynamic and
interactive, allowing users to explore the data in real time and uncover
insights that may not be immediately visible with static graphs.

## Milestone 2 (7th May, 5pm)

**10% of the final grade**

Our demo site can be accessed on localhost:3000.

The goal of our project is to create a visually engaging and informative website
that explores the voting patterns of the Eurovision Song Contest. The site will
feature various data visualisations that will help users to better understand
how different countries vote for each other in this annual competition. We plan
to create an interactive map that displays which countries tend to vote for
which others, as well as providing another interactive visual to explore polling
data that will give insight into how different factors can impact voting
patterns. By providing this information in an easily accessible format, we hope
to deepen users' understanding of the Eurovision Song Contest and its unique
cultural significance across Europe and beyond.

Our website will consist of a main landing page, from which users will be able
to navigate to other pages containing the visualisations. The landing page will
provide a brief overview of the Eurovision Song Contest and will outline the
purpose of the visualisations.

<img src="/img/landing_page.jpg" alt="Landing page" style="width: 50%; height: auto;">

### Visualising the Voting Data

Each country’s public and jury can allocate a set of points to other countries.
In this visualisation, the user will be able to, for a chosen year, select a
country and see where the country’s votes went. As shown below, arrows will come
out from the country pointing to the countries which received votes. The more
points a country receives, the bolder the arrow and the more prominent the
shading of the country. There will be a three-way toggle which will allow us to
view the televotes, jury votes, and the combined votes. Right-clicking will
allow the user to switch the view and see which countries voted for the selected
country.

To the side, we will have a bar chart that will also visualise the voting data.
For example, in this case Germany gave the United Kingdom the most points, so
the United Kingdom is at the top of the bar chart, has the boldest arrow
pointing to it, and is most prominently shaded.

This visualisation will allow us to see in one frame how a country votes. By
varying the year, we can see if the voting pattern is the similar over time. It
will also allow us to see geographic clusters (e.g. we will be able to quickly
confirm if the Nordic countries are all voting for each other).

<img src="/img/voting.jpg" alt="Voting" style="width: 50%; height: auto;">

The lectures that we will need for this visualisation are: Interactions, Dos and
Don’ts, Design for Data Viz, Maps, Graph Visualization.

The tools that we will need are: HTML/JS for interactive webpage elements,
and [barplot](https://d3-graph-gallery.com/barplot.html)
and [connection map](https://d3-graph-gallery.com/connectionmap.html).

### Visualising the Polling Data

There are two main fan polls that take place before each edition of Eurovision
to determine which countries are the fans’ favourites. Our data contains the
average ranking of each country in both polls. It will be possible to explore
the polls by selecting a year and which of the two polls the user would like to
see. On the left, we will have a bar chart that will allow us to see who the
favourites were each year. On the right, we will be able to select a country and
a poll and view how that country’s placement in the poll has changed over time.
This will allow us to discover insights such as whether a country is a
consistently strong competitor or not.

<img src="/img/polling1.jpg" alt="Polling 1" style="width: 50%; height: auto;">

We will be able to select the year and country with drop down lists. Selecting a
country will be done with the flags as they are more recognisable.

<img src="/img/polling2.jpg" alt="Polling 2" style="width: 50%; height: auto;">

The lectures that we will need for this visualisation are: Interactions, Dos and
Don’ts, Design for Data Viz.

The tools that we will need are: HTML/JS for interactive webpage elements,
and [barplot](https://d3-graph-gallery.com/barplot.html)
and [line chart](https://d3-graph-gallery.com/line.html).

### Extra Ideas

The components of our site are isolated from each other, meaning that each page
can be developed independently of each other. These visualisations will be our
core, but should we successfully create them and wish to go further, we can use
the song data. Here are some potential ideas:

- Plot distribution of act characteristics over time (e.g. percentage songs that
  are ballads each year, or average BPM)

- Visualise clusters of songs based on characteristics. We could use a
  clustering algorithm on the song characteristics to identify clusters of
  similar songs

## Milestone 3 (4th June, 5pm)

**80% of the final grade**

Website: https://com-480-data-visualization.github.io/project-2023-data-connoisseurs/

Process
Book: https://github.com/com-480-data-visualization/project-2023-data-connoisseurs/blob/master/process_book.pdf

Screencast: https://youtu.be/ei0vqu_CyJ8

Technical Setup: `/src/README.md`

## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

