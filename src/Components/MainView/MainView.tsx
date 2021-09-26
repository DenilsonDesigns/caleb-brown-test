import { useState, useEffect } from "react";
import { gexios } from "../../util/gexios";
import {
  Table,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Col,
  Row,
} from "reactstrap";
import TablePagin from "./TablePagin/TablePagin";
import { ClipLoader } from "react-spinners";
import CryptoTableRow from "../UI/CryptoTableRow/CryptoTableRow";
import { FiSearch } from "react-icons/fi";
import { MAIN_VIEW_KV_PAIRS } from "../../util/globalVars";

const MainView = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [coins, setCoins] = useState<MainViewCoin[]>([] as MainViewCoin[]);
  const [filteredCoins, setFilteredCoins] = useState<MainViewCoin[]>(
    [] as MainViewCoin[]
  );
  const [coinsOnPage, setCoinsOnPage] = useState<MainViewCoin[]>(
    [] as MainViewCoin[]
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect((): void => {
    setLoading(true);
    gexios
      .get("/coins/markets", {
        params: { vs_currency: "usd" },
      })
      .then((res: { data: MainViewCoin[] }) => {
        setCoins(res.data);
        setFilteredCoins(res.data);
        setLoading(false);
      })
      .catch((e: string) => {
        console.log(e);
        setError(JSON.stringify(e));
        setLoading(false);
      });
  }, []);

  useEffect((): void => {
    setCoinsOnPage(filterCoinsByPageNum(filteredCoins, currentPage));
  }, [filteredCoins, currentPage]);

  useEffect((): void => {
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

  const paginClick = (pageNum: number): void => {
    setCurrentPage(pageNum);
  };

  const filterCoinsByPageNum = (
    coinList: MainViewCoin[],
    pageNum: number
  ): MainViewCoin[] => {
    let upperLimit = pageNum * 10 - 1;
    let lowerLimit = pageNum * 10 - 10;
    return coinList.filter(
      (_: object, i: number) => i >= lowerLimit && i <= upperLimit
    );
  };

  return (
    <div>
      <Row style={{ marginBottom: "1%", marginTop: "1%" }}>
        <Col md={3}>
          <h4>Cryptocurrency Dashboard</h4>
        </Col>
        <Col md={3}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FiSearch size={"1.42em"} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder={"Type to search..."}
              onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
              value={searchValue}
            />
          </InputGroup>
        </Col>
      </Row>
      {loading ? (
        <ClipLoader />
      ) : error ? (
        <p className="error-div">
          Something went wrong! <br />
          {error}
        </p>
      ) : (
        <>
          <Table className=".bg-light" hover bordered>
            <thead>
              <tr>
                {Object.keys(MAIN_VIEW_KV_PAIRS).map((keyVal, i) => {
                  return <th key={i}>{keyVal}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {coinsOnPage.map((coin: any) => {
                return <CryptoTableRow key={coin.name} coin={coin} />;
              })}
            </tbody>
          </Table>
          <TablePagin
            coinList={filteredCoins}
            currentPage={currentPage}
            onClick={paginClick}
          />
        </>
      )}
    </div>
  );
};

export default MainView;
