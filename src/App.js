import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Personal from "./components/Personal/Personal";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Tools from "./components/Tools/Tools";
import Contact from "./components/Contact/Contact";

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
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
