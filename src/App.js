import './App.css';
import LandingPage from "./pages/LandingPage/index";
import AboutPage from "./pages/AboutPage/index";
import SponsorPage from "./pages/SponsorPage/index";
import TeamPage from "./pages/TeamPage/index";

import StyleGuide from "./pages/StyleGuide";

import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar, { NavbarOffset } from './widgets/Navbar';
import Footer from './widgets/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/style">
              <StyleGuide />
            </Route>
            <Route path="/about-us">
              <NavbarOffset />
              <AboutPage />
            </Route>
            <Route path="/sponsor-us">
              <NavbarOffset />
              <SponsorPage />
            </Route>
            <Route path="/join">
              <NavbarOffset />
              <TeamPage />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </ParallaxProvider>
    </div>
  );
}

export default App;
