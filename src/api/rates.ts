import { parseResponse } from '../utils';

export const getRates = async () => {
  const res = await fetch('/api/rates');
  const data = await res.text();
  if (!res.ok) {
    throw new Error('Exchange rates are currently unavailable, please try again later');
  }

  return parseResponse(data);
};
