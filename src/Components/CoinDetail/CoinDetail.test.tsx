import { render, screen } from "@testing-library/react";
import CoinDetail from "./CoinDetail";
import { BrowserRouter } from "react-router-dom";

const COIN_PROP = {
  id: "dogecoin",
  symbol: "doge",
  name: "Dogecoin",
  circulating_supply: 131433118833.266,
  current_price: 0.208089,
  market_cap: 27284951939,
  market_cap_rank: 10,
  total_volume: 925001850,
  price_change_24h: -0.003380898453,
  price_change_percentage_24h: -1.59876,
  max_supply: null,
  total_supply: null,
};

let coinDetail: any;

describe("CoinDetail:", () => {
  beforeEach(() => {
    coinDetail = render(
      <BrowserRouter>
        <CoinDetail />
      </BrowserRouter>
    );
  });

  it("matches snapshot", () => {
    expect(coinDetail).toMatchSnapshot();
  });
});
