import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Col,
} from "reactstrap";
import MainViewRow from "./MainViewRow/MainViewRow";
import TablePagin from "./TablePagin/TablePagin";

// @TODO: Export this to vars file.
const MAIN_VIEW_KV_PAIRS = {
  "#": "market_cap_rank",
  Name: "name",
  Price: "current_price",
  "24h %": "price_change_percentage_24h",
  "Market Cap": "market_cap",
  "Circulating Supply": "circulating_supply",
  "Max Supply": "max_supply",
  "Supply %": "circ_supply_percent", // not supplied by api, need to calc.
};

const MainView = (): JSX.Element => {
  // {/* @TODO: create interface for `coin` any `coinsOnPage` */}
  // @TODO: proper types for state containers.

  const [coins, setCoins] = useState<any>([]);
  const [filteredCoins, setFilteredCoins] = useState<any>([]);
  const [coinsOnPage, setCoinsOnPage] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // @TODO: configure axios to use base url from coingecko.
    // use a cool name like "coinGexios";
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: { vs_currency: "usd" },
      })
      .then((res) => {
        console.log(res.data);
        // @TODO: need to sort by ranking desc, for some reason coingecko doesnt give
        // in totally correct order.
        setCoins(res.data);
        setFilteredCoins(res.data);
      });
    return () => {};
  }, []);

  useEffect(() => {
    setCoinsOnPage(filterCoinsByPageNum(filteredCoins, currentPage));
  }, [filteredCoins, currentPage]);

  useEffect(() => {
    // set filteredcoins by filtering coins on the value.
    if (searchValue.length > 1) {
      setFilteredCoins(
        coins.filter(
          (coin: any) =>
            coin.name.toLowerCase().includes(searchValue) ||
            coin.symbol.toLowerCase().includes(searchValue)
        )
      );
    }
    if (searchValue.length === 0) setFilteredCoins(coins);
  }, [searchValue, coins]);

  const paginClick = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  const filterCoinsByPageNum = (coinList: object[], pageNum: number) => {
    let upperLimit = pageNum * 10 - 1; //9, 9
    let lowerLimit = pageNum * 10 - 10; // 0, 10
    return coinList.filter(
      (_: object, i: number) => i >= lowerLimit && i <= upperLimit
    );
  };

  return (
    <div>
      <h4>Cryptocurreny Dashboard</h4>
      <Col md={3}>
        {/* @TODO: add magnifying glass icon. */}
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>To the Left!</InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder={"Type to search..."}
            onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
            value={searchValue}
          />
        </InputGroup>
      </Col>
      <Table dark>
        <thead>
          <tr>
            {Object.keys(MAIN_VIEW_KV_PAIRS).map((keyVal, i) => {
              return <th key={i}>{keyVal}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {coinsOnPage.map((coin: any) => {
            return <MainViewRow key={coin.name} coin={coin} />;
          })}
        </tbody>
      </Table>
      <TablePagin
        coinList={coins}
        currentPage={currentPage}
        onClick={paginClick}
      />
    </div>
  );
};

export default MainView;
