import { useHistory } from "react-router";
import { convertVal } from "../../../util/globalFuncs";
import { MAIN_VIEW_ROW_KV_PAIRS } from "../../../util/globalVars";

const CryptoTableRow = (props: CryptoTableRowProps): JSX.Element => {
  const history = useHistory();

  return (
    <tr
      onClick={() => {
        history.push(`/detail/${props.coin.id}`);
      }}
    >
      <th>{props.coin.market_cap_rank}</th>
      {Object.values(MAIN_VIEW_ROW_KV_PAIRS).map((value: string, i: number) => {
        return (
          <td key={i}>{convertVal(props.coin[value], value, props.coin)}</td>
        );
      })}
    </tr>
  );
};

export default CryptoTableRow;
