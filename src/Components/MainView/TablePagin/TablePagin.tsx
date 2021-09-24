import { Button } from "reactstrap";

// @TODO: interface for props.
const TablePagin = (props: any) => {
  // 57: 5.7, 6 buttons
  const numButtons = Math.ceil(props.coinList.length / 10);

  const buildButtons = (num: number, curr: number) => {
    let r = [];

    for (let i = 1; i <= num; i++) {
      let comp = (
        <Button
          onClick={() => props.onClick(i)}
          outline={i === curr ? false : true}
          color="info"
          key={i}
          style={{ margin: "0px 4px" }}
        >
          {i}
        </Button>
      );
      r.push(comp);
    }
    return r;
  };

  return <div>{buildButtons(numButtons, props.currentPage)}</div>;
};

export default TablePagin;
