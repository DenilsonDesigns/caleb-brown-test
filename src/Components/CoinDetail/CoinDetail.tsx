import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { gexios } from "../../util/gexios";
import { ClipLoader } from "react-spinners";

const CoinDetail = (): JSX.Element => {
  const location = useLocation();
  let coinPath: Array<string> = location.pathname.split("/");
  let coin = coinPath[coinPath.length - 1];

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [coinDetail, setCoinDetail] = useState<CoinDetail>({} as CoinDetail);

  useEffect(() => {
    setLoading(true);
    gexios
      .get(`/coins/${coin}`, {
        params: { vs_currency: "usd" },
      })
      .then((res: { data: CoinDetail }) => {
        setCoinDetail(res.data);
        setLoading(false);
      })
      .catch((e: string) => {
        console.log(e);
        setError(JSON.stringify(e));
        setLoading(false);
      });
  }, [coin]);

  return loading ? (
    <ClipLoader />
  ) : error ? (
    <p className="error-div">
      Something went wrong! <br />
      {error}
    </p>
  ) : (
    <Card style={{ marginTop: "1%" }}>
      <CardBody>
        <CardTitle className="coin-title" tag="h4">
          {coin}
        </CardTitle>
        <CardText>
          Block Time: {coinDetail.block_time_in_minutes} minutes
        </CardText>
        <CardText>Coingecko Rank: {coinDetail.coingecko_rank}</CardText>
        <CardText>Coingecko Score: {coinDetail.coingecko_score}</CardText>
        <CardText>Community Score: {coinDetail.community_score}</CardText>
        <CardText
          className="coin-detail-desc"
          dangerouslySetInnerHTML={{ __html: coinDetail?.description?.en }}
        ></CardText>
      </CardBody>
    </Card>
  );
};

export default CoinDetail;
