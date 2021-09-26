export const convertVal = (val, key, fullObj) => {
  switch (key) {
    case "current_price":
      return `$${convertToCurrencyNum(val)}`;
    case "market_cap":
      return `$${convertToCurrencyNum(val)}`;
    case "circulating_supply":
      return `${convertToVolNum(val)}`;
    case "max_supply":
      return `${convertToVolNum(val)}`;
    case "total_volume":
      return `${convertToVolNum(val)}`;
    case "circ_supply_percent":
      return `${calcCircSupply(fullObj)}`;
    default:
      return val;
  }
};

// source: https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
export const convertToCurrencyNum = (val) => {
  return !val ? "N/A" : val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

export const convertToVolNum = (val) => {
  return !val ? "N/A" : Number(val.toFixed(1)).toLocaleString();
};

export const calcCircSupply = (obj) => {
  if (!obj.max_supply || !obj.circulating_supply) return "N/A";

  return ((100 * obj.circulating_supply) / obj.max_supply).toFixed(2);
};
