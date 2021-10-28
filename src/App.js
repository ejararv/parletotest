import "./App.css";
import React, { useEffect } from "react";
import SumSalaries from "./components/SumSalaries";
import WorkersTab from "./components/WorkersTab";
import { data } from "./Data/data";

function App() {
  useEffect(() => {});

  return (
    <div className="App">
      <WorkersTab
        data={data}
        sum={<SumSalaries data={data} currency="USD" />}
      ></WorkersTab>

      {/* <datalist id="data">
        <option value="TEXT" />
      </datalist> */}
    </div>
  );
}

export default App;
