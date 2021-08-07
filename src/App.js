import LandingPage from "./pages/LandingPage/index";
import AboutPage from "./pages/AboutPage/index";
import StyleGuide from "./pages/StyleGuide";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/style">
            <StyleGuide />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
