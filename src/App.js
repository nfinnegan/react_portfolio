import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Personal from "./components/Personal/Personal";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Tools from "./components/Tools/Tools";
import Contact from "./components/Contact/Contact";
import Recco from "./components/Recommendations/Reccomendations";

function App() {
  return (
    <HashRouter>
      <div className="overallApp">
        <Header />
        <div className="allContent">
          <Switch>
            <Route exact path="/">
              <About />
              <Personal />
              <Skills />
              <Tools />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/reccos">
              <Recco />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
