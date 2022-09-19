# Money conversion app

## Features

- displays daily exchange rates
- converts czech crowns to selected currency
- url [http://moneyapp-rouge.vercel.app/](http://moneyapp-rouge.vercel.app/)

## Development

```sh
yarn dev
```

or

```sh
npm run dev
```

development server also creates a proxy server to the API which rewrites
`https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt` to local `/api/rates` url. For more details check `vite.config.js`

## Deployment

Currently, it's deployed to Vercel and for api it's necessary to setup a proper rewrite. Check `vercel.json` for more details

## Testing

execute

```sh
yarn test
```

or

```sh
npm run test
```
