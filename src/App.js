import logo from "./logo.jpg";
import Dictionary from "./Dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header mb-5">
          <img src={logo} className="App-logo img-fluid mb-2" alt="logo" />
          <h1 className="text-center">Z's Dictionary</h1>
        </header>
        <Dictionary />
        <footer className="text-center mt-5">
          Coded by Zgene' Burdge, open-sourced on{" "}
          <a
            href="https://github.com/ZBurdge/react-dictionary.git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://wonderful-twilight-c6639b.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
