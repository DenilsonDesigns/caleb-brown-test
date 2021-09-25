import { Button } from "reactstrap";

const TablePagin = (props: TablePaginProps) => {
  const numButtons = Math.ceil(props.coinList.length / 10);

  const buildButtons = (num: number, curr: number) => {
    let r = [];

    for (let i = 1; i <= num; i++) {
      let comp = (
        <Button
          onClick={() => props.onClick(i)}
          outline={i === curr ? false : true}
          className=".bg-light"
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
