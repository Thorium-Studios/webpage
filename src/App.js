import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages and components imports
import SiteHeader from "./components/SiteHeader";
import Homepage from "./pages/Homepage";
import OurTeam from "./pages/OurTeam";
import Projects from "./pages/Projects";
import TestPage from "./pages/TestPage";

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
          {/* OurTeam route */}
          <Route path="/our-team">
            <OurTeam />
          </Route>
          {/* Project list route */}
          <Route path="/projects">
            <Projects />
          </Route>
          {/* Test page route */}
          <Route path="/test">
            <TestPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
