export type Data = ReturnType<typeof parseResponse>;

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
  const date = lines[0]?.split('#')[0];
  const list = lines.reduce((acc, line, i) => {
    if (i <= 1) return acc;
    if (!line) return acc;
    return [...acc, parseLine(line)];
  }, [] as ReturnType<typeof parseLine>[]);
  return { list, date };
};

export const calculate = (input: number, code: string, data: Data['list']) => {
  const currency = data.find((d) => d.code === code);
  if (!currency || currency.rate === 0 || currency.amount === 0) return;
  return input / (currency.rate / currency.amount);
};
