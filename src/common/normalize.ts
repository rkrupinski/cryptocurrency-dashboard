export const currencies = (data: {
  [key: string]: any,
}) => Object.keys(data).map((key) => {
  const {
    Id: id,
    CoinName: name,
    Symbol: symbol,
  } = data[key];

  return { id, name, symbol };
});
