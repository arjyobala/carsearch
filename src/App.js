import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar title="Car Search" />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
