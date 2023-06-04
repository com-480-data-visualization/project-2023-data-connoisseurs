To run the project locally:

- `cd` into project root directory
- Add a `.env` file with MapBox GL access
  token: `REACT_APP_MAPBOX_ACCESS_TOKEN=pk.eyJ1IjoieGlvenp6IiwiYSI6ImNsaGUyZDd3ZTB3NmQzcm40NHM5cjZmMzgifQ.TSEPsoP2wFFQsZTw7MR0lg`
- Run `pnpm install` (IMPORTANT: instead of `npm`)
- Run `pnpm start`

To install dependencies:

- Use `pnpm` instead of `npm` as package manager
- `pnpm install` to install all the project dependencies in `/node_modules`
- `pnpm add [package-name]` to install new dependencies

To deploy onto GitHub Pages:

- Run `pnpm deploy` to generate and deploy the `build` folder