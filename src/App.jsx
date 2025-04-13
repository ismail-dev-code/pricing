import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultsChart from "./components/ResultsChart/ResultsChart";
import axios from "axios";
import MarksChart from "./components/MarksChart/MarksChart";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

const marksPromise = axios.get("marksData.json");
console.log(marksPromise);
function App() {
  return (
    <>
      <header>
        <DaisyNav></DaisyNav>
        <NavBar></NavBar>
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-ball loading-lg"></span>}
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
        <Suspense
          fallback={<span className="loading loading-ball loading-lg"></span>}
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultsChart></ResultsChart>
      </main>
    </>
  );
}

export default App;
