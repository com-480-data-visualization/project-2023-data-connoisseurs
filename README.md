# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Anton Hosgood  | 302242 |
| Jiabao Wen     | 315294 |
| Zhe Xiong      | 338700 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (7th April, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

### Dataset

https://www.kaggle.com/datasets/diamondsnake/eurovision-song-contest-data

The dataset contains data from the editions of Eurovision since 2016:

- Final results
  - Jury vote results from each participating country
  - Public vote results from each participating country
- Polls
  - Predicted winning country by fans on [Eurovisionworld](https://eurovisionworld.com/)
  - Favourite songs of fans on [OGAE](https://ogaeinternational.org/)
- Basic data on each edition of Eurovision
- Geographic region of each country
- Basic data on each entry

### Problematic

The Eurovision Song Contest is the most popular international music competition, with millions of viewers tuning in every year to watch the performances and vote for their favourite countries. As a data visualisation project, the goal is to provide insights into how countries vote for each other and the factors that influence their decisions.

The main axis that will be developed for this visualisation project is based on the following question and objectives:

> What is the main goal of your visualisation?

- To show which countries vote for each other
- To visualise the differences between the results of polls and the actual results
- To compare the jury vote and televote
- To identify possible hidden factors (such as geographic or linguistic closeness) that influence one country to vote for another
- To show how the voting patterns have evolved over time
- To show if certain countries prefer specific genres

The project aims to provide an overview of the Eurovision Song Contest, including an analysis of the voting patterns through visualisation, as well as the factors that may influence the voting process. The target audience includes Eurovision fans, people interested in data analysis, and anyone who enjoys visualising complex data.

### Exploratory Data Analysis

Pre-processing of the chosen dataset is an important step in the data analysis process, as it allows us to identify data quality issues and perform data cleaning to ensure that the dataset is ready for analysis.

The exploratory data analysis phase will involve the following:

- Show basic statistics and provide insights about the data, including data distribution, data types, and data quality checks

The exploratory data analysis has been carried out in `eda.py`. The dataset, for the most part, does not require any cleaning (besides `song_data.csv` which contains some missing values). It will become more apparent later on to what extent this will be important in our visualisation, since we cannot impute the values nor does it make sense to remove these rows. It will, however, need to be pre-processed a bit to get it into a format usable for our visualisation.

### Related work

The Eurovision Song Contest has been analysed by several researchers in the past, and their work provides a valuable source of inspiration for this project. This section discusses related work:

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
- The approach includes dynamic interactions with the graphs instead of static graphs
- We will be able to answer multiple questions simultaneously using a single visualisation

> What source of inspiration did you take? This includes visualisations from other websites or magazines that may be unrelated to your data.

Two sources of inspiration include:

- https://memgraph.com/blog/analyzing-the-eurovision-song-contest-with-graphs
- https://www.kaggle.com/code/jeleandro/network-analysis-applied-to-eurovision

These sources provide valuable insight into the analysis of the Eurovision Song Contest, which can be used to develop our approach for this project, and provide us with an insight into how our visualisation might look.

Overall, this project aims to provide an analysis through visualisation of the Eurovision Song Contest, including a deep dive into the voting patterns and factors that influence the voting process. The visualisation will be dynamic and interactive, allowing users to explore the data in real time and uncover insights that may not be immediately visible with static graphs.

## Milestone 2 (7th May, 5pm)

**10% of the final grade**


## Milestone 3 (4th June, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

