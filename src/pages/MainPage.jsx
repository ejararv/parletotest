import "./../styles/styles.css";
import React, { useState } from "react";
import SumSalaries from "./../components/SumSalaries";
import WorkersTab from "./../components/WorkersTab";
import { data } from "./../Data/data";
import WorkerForm from "./../components/WorkerForm";
import Modal from "./../components/UI/Modal/Modal";
import MySelect from "./../components/UI/MySelect/MySelect";
import { useWorkers } from "./../hooks/useWorkers";
import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from "../components/UI/MyButton/MyButton";
import NotFound from "../components/UI/NotFound/NotFound";

function MainPage() {
  const [workers, setWorkers] = useState(data);
  const [modal, setModal] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedAndSearchedWorkers = useWorkers(
    workers,
    selectedSort,
    searchQuery
  );

  const createWorker = (newWorker) => {
    setWorkers([...workers, newWorker]);
    setModal(false);
  };

  const sortWorkers = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <div className="container">
        {" "}
        <MyInput
          placeholder="Type to Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <MySelect
          value={selectedSort}
          defaultValue="Sort by department"
          onChange={sortWorkers}
          options={[
            { value: "IT", name: "By IT" },
            { value: "Sales", name: "By Sales" },
            { value: "Administration", name: "By Administraton" },
            { value: "", name: "Clear" },
          ]}
        />
        <MyButton onClick={() => setModal(true)}> Add worker</MyButton>
        <Modal visible={modal} setVisible={setModal}>
          <WorkerForm create={createWorker} />
        </Modal>
      </div>
      {!sortedAndSearchedWorkers.length ? (
        <NotFound />
      ) : (
        <WorkersTab
          data={sortedAndSearchedWorkers}
          workerId={workers.length}
          sum={<SumSalaries data={sortedAndSearchedWorkers} currency="USD" />}
        />
      )}
    </div>
  );
}

export default MainPage;
