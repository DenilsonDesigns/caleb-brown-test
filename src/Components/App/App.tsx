import MainView from "../MainView/MainView";
import NavBar from "../NavBar/NavBar";
import "./App.css";
import { Container } from "reactstrap";

const App = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <Container>
        <MainView />
      </Container>
    </div>
  );
};

export default App;
