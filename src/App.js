import './App.css';
import LandingPage from "./pages/LandingPage/index";
import AboutPage from "./pages/AboutPage/index";
import SponsorPage from "./pages/SponsorPage/index";
import TeamPage from "./pages/TeamPage/index";

import StyleGuide from "./pages/StyleGuide";

import Navbar from './widgets/Navbar';
import Footer from './widgets/Footer';

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
        <Navbar />
        <Switch>
          <Route path="/style">
            <StyleGuide />
          </Route>
          <Route path="/about-us">
            <AboutPage />
          </Route>
          <Route path="/sponsor-us">
            <SponsorPage />
          </Route>
          <Route path="/join">
            <TeamPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
