import "./App.css";
import React, { useEffect, useState } from "react";
import SumSalaries from "./components/SumSalaries";
import WorkersTab from "./components/WorkersTab";
import { data } from "./Data/data";
import WorkerForm from "./components/WorkerForm";
import Modal from "./components/UI/Modal/Modal";

function App() {
  const [workers, setWorkers] = useState(data);
  const [modal, setModal] = useState(false);

  const createWorker = (newWorker) => {
    setWorkers([...workers, newWorker]);
    setModal(false);
  };

  return (
    <div className="App">
      <WorkersTab
        data={workers}
        workerId={workers.length}
        sum={<SumSalaries data={workers} currency="USD" />}
      ></WorkersTab>
      <button onClick={() => setModal(true)}>Add worker</button>
      <Modal visible={modal} setVisible={setModal}>
        <WorkerForm create={createWorker} />
      </Modal>
    </div>
  );
}

export default App;
