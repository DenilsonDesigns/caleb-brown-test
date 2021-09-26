import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App:", () => {
  let app = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  it("matches snapshot", () => {
    expect(app).toMatchSnapshot();
  });
});
