import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultcity="Berlin" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/salomeIsCoding"
              target="_blank"
              rel="noreferrer"
            >
              Salomé Erard
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/salomeIsCoding/weather-app-react-final-project"
              target="_blank"
              rel="noreferrer"
            >
              Github{" "}
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
