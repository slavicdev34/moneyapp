export type Data = ReturnType<typeof parseLine>;

const parseLine = (line: string) => {
  const items = line.split('|');
  return {
    country: items[0],
    currency: items[1],
    amount: Number(items[2]),
    code: items[3],
    rate: Number(items[4]),
  };
};

export const parseResponse = (input: string) => {
  const lines = input.split('\n');
  const data = lines.reduce((acc, line, i) => {
    if (i <= 1) return acc;
    if (!line) return acc;
    return [...acc, parseLine(line)];
  }, [] as Data[]);
  return data;
};

export const calculate = (input: number, code: string, data: Data[]) => {
  const currency = data.find((d) => d.code === code);
  console.log({ input, code, data, currency });
  if (!currency) return;
  return input / (currency.rate / currency.amount);
};
