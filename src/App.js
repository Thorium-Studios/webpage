import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages and components imports
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import OurTeam from "./pages/OurTeam";
import Projects from "./pages/Projects";

// Import Project pages
import Webpage from "./pages/Projects/Webpage";

// Ras Project
import Ras from "./pages/Projects/Ras/Ras";
import PlayRas from "./pages/Projects/Ras/PlayRas";

// Project 210
import Project210 from "./pages/Projects/Project210";

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Switch>
          {/* ContactForm route */}
          <Route path="/contact">
            <Contact />
          </Route>
          {/* OurTeam route */}
          <Route exact path="/our-team">
            <OurTeam />
          </Route>
          {/* Project list route */}
          <Route exact path="/projects">
            <Projects />
          </Route>
          {/* Individual projects route */}

          {/* Ras routes */}
          <Route exact path="/projects/ras">
            <Ras />
          </Route>
          <Route exact path="/projects/ras/play">
            <PlayRas />
          </Route>

          {/* 210 routes */}
          <Route exact path="/projects/210">
            <Project210 />
          </Route>

          {/* Home route */}
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
