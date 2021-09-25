import MainView from "../MainView/MainView";
import NavBar from "../UI/NavBar/NavBar";
import "./App.css";
import { Container } from "reactstrap";
import Trending from "../Trending/Trending";
import { Switch, Route } from "react-router-dom";
import CoinDetail from "../CoinDetail/CoinDetail";

const App = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/trending">
            <Trending />
          </Route>
          <Route exact path="/main-view">
            <MainView />
          </Route>
          <Route path="/detail/">
            <CoinDetail />
          </Route>
          <Route>
            <MainView />
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
