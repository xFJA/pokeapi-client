import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PokeApi from "./services/pokeapi";

const Api = new PokeApi();

function App() {
  Api.getAll(0, 20)
    .then((res) => console.log(res.results))
    .catch((err) => console.error(err));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
