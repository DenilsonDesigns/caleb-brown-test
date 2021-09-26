import { render } from "@testing-library/react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  let comp = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  expect(comp).toMatchSnapshot();
});
