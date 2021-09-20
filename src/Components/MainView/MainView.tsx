import { useState, useEffect } from "react";
import axios from "axios";

const MainView = (): JSX.Element => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // @TODO: configure axios to use base url from coingecko.
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: { vs_currency: "usd" },
      })
      .then((res) => {
        console.log(res.data);
        setCoins(res.data);
      });
    return () => {};
  }, []);

  return (
    <div>
      <h4>Dashboard</h4>

      {coins.map((coin: any) => {
        return <p>{coin.id}</p>;
      })}
      <p>test</p>
    </div>
  );
};

export default MainView;
