export const getRates = async () => {
  const res = await fetch(
    'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt',
  );
  const data = await res.text();
  return data;
};
