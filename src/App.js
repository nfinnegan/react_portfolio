import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Personal from "./components/Personal/Personal";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Tools from "./components/Tools/Tools";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Personal />
      <Skills />
      <Tools />
      <Footer />
    </div>
  );
}

export default App;
