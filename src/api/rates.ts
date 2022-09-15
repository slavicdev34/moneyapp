export const getRates = async () => {
  const res = await fetch('/rates');
  const data = await res.text();
  return data;
};
