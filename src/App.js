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

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Switch>
          {/* Home route */}
          <Route exact path="/">
            <Homepage />
          </Route>
          {/* ContactForm route */}
          <Route path="/contact">
            <Contact />
          </Route>
          {/* OurTeam route */}
          <Route path="/our-team">
            <OurTeam />
          </Route>
          {/* Project list route */}
          <Route exact path="/projects">
            <Projects />
          </Route>
          {/* Individual projects route */}
          <Route path="/projects/webpage">
            <Webpage />
          </Route>
        </Switch>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
