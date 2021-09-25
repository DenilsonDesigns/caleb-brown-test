import { useState, useEffect } from "react";
import { gexios } from "../../util/gexios";
import { ClipLoader } from "react-spinners";
import { Table } from "reactstrap";
import CryptoTableRow from "../UI/CryptoTableRow/CryptoTableRow";
import { MAIN_VIEW_KV_PAIRS } from "../../util/globalVars";

const Trending = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [trendingList, setTrendingList] = useState<MainViewCoin[]>(
    [] as MainViewCoin[]
  );

  useEffect(() => {
    setLoading(true);
    gexios
      .get("/coins/markets", {
        params: { vs_currency: "usd", order: "volume_desc", per_page: 10 },
      })
      .then((res: { data: MainViewCoin[] }) => {
        console.log(res.data);
        setTrendingList(res.data);
        setLoading(false);
      })
      .catch((e: string) => {
        console.log(e);
        setError(JSON.stringify(e));
        setLoading(false);
      });
    return () => {};
  }, []);

  return (
    <div>
      <h4>Trending Cryptos By Volume</h4>

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
              {trendingList.map((trendingItem: any) => {
                return (
                  <CryptoTableRow key={trendingItem.name} coin={trendingItem} />
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default Trending;
