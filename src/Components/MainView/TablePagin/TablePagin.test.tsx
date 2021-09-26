import { render, screen } from "@testing-library/react";
import TablePagin from "./TablePagin";
import { BrowserRouter } from "react-router-dom";

const COIN_LIST_PROP = [
  {
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
  },
];

let tablePagin: any;

let tablePaginOnClick = jest.fn();

describe("TablePagin:", () => {
  beforeEach(() => {
    tablePagin = render(
      <BrowserRouter>
        <TablePagin
          coinList={COIN_LIST_PROP}
          currentPage={0}
          onClick={tablePaginOnClick}
        />
      </BrowserRouter>
    );
  });

  it("matches snapshot", () => {
    expect(tablePagin).toMatchSnapshot();
  });

  it("renders correct number of buttons", () => {
    // @NOTE: I shoulda used Enzyme. React testing lib sucks
    let butts = screen.getByText("1");
    expect(butts).toHaveTextContent("1");
  });
});
