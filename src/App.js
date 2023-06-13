import logo from "./logo.svg";
import Dictionary from "./Dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid mb-5" alt="logo" />
        </header>
        <Dictionary />
        <footer className="text-center mt-5">Coded by Zgene' Burdge</footer>
      </div>
    </div>
  );
}
