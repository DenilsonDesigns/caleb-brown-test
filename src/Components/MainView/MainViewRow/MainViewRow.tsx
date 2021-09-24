const MAIN_VIEW_ROW_KV_PAIRS = {
  Name: "name",
  Price: "current_price",
  "24h %": "price_change_percentage_24h",
  "Market Cap": "market_cap",
  "Circulating Supply": "circulating_supply",
  "Max Supply": "max_supply",
  "Supply %": "circ_supply_percent", // not supplied by api, need to calc.
};

// @TODO: create interface for props.
// @TODO: eventually the value inside the <td> will go through a func.
//        this func will have a switch statement that will format
//        the value based on the k,v of the object, ie:
//        Price: current_price will be formatted like `$44,342.85` vs. `44342.85`
const MainViewRow = (props: any): JSX.Element => {
  return (
    <tr>
      <th>{props.coin.market_cap_rank}</th>
      {Object.values(MAIN_VIEW_ROW_KV_PAIRS).map((value, i) => {
        return <td key={i}>{props.coin[value]}</td>;
      })}
    </tr>
  );
};

export default MainViewRow;
