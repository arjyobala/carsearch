import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About demoby="Arjyo" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
