<h1 align="center"> Currency Exchange App </h1>
<p align="center">
Exchange currencies to USD, EUR, GBP with polling FX rates.
</p>

## :package: Installation

Clone the repo and install dependencies with Yarn.

```sh
> yarn install
```

## :wrench: Local Development

Spin up the local development server

```sh
> yarn dev
```

Build for production

```sh
> yarn build
```

Run production build

```sh
> yarn start
```

## :syringe: Testing

Run testing suite
```sh
> yarn test
```

Run testing suite with watcher
```sh
> yarn test:watch
```

Run linting
```sh
> yarn lint
```

## :truck: Deployment

The master branch of this repository will be deployed using [now.sh](https://zeit.co/home).

Check the repo description for a link to the app on production.

In addition, pull request feature branches will also be available on a staging environment.

## :pencil: Future Roadmap Items

- Expand the `pages/api/rates.js` lamba function to poll and cache an OpenFX API every hour to be able to serve the app without running into expensive rate limits. 

- Break down the `<ExchangeWidget />` component into more manageable and testable components.

- Leverage the [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) to create more functional state mutation. Bring in actions and dispatchers.

- Write more extensive unit tests on all components and bring in a thin e2e testing suite using [Cypress](https://www.cypress.io/).

- Refactor in `TypeScript` to give better type support (interfaces, enums) all throughout the application.
