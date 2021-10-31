import React, { useState } from "react";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import MySelect from "./UI/MySelect/MySelect";
const emptyWorkerForm = {
  firstName: "",
  lastName: "",
  department: "",
  salary: 0,
  currency: "USD",
};
const WorkerForm = ({ create, workerId }) => {
  const [worker, setWorker] = useState(emptyWorkerForm);
  const [selectedValue, setSelectedValue] = useState("");

  const addWorker = (e) => {
    e.preventDefault();
    const newWorker = {
      ...worker,
      id: worker.length,
    };
    create(newWorker);
    setWorker(emptyWorkerForm);
  };

  const getSelectedValue = (select) => {
    setSelectedValue(select);
    setWorker({ ...worker, department: select });
  };

  return (
    <form className="form">
      <MySelect
        style={{ width: 230, padding: "5px 15px", margin: "20px" }}
        value={worker.department}
        type="text"
        defaultValue="Department"
        onChange={getSelectedValue}
        options={[
          { value: "IT", name: "IT" },
          { value: "Sales", name: "Sales" },
          { value: "Administration", name: "Administraton" },
        ]}
      />
      <MyInput
        style={{ width: 230 }}
        value={worker.firstName}
        onChange={(e) => setWorker({ ...worker, firstName: e.target.value })}
        type="text"
        required="required"
        placeholder="First name"
      />
      <MyInput
        style={{ width: 230 }}
        value={worker.lastName}
        onChange={(e) => setWorker({ ...worker, lastName: e.target.value })}
        type="text"
        required
        placeholder="Last name"
      />

      <MyInput
        style={{ width: 230 }}
        value={worker.salary}
        onChange={(e) => setWorker({ ...worker, salary: e.target.value })}
        type="number"
        required
        placeholder="Salary"
      />

      <MyButton style={{ width: 230 }} onClick={addWorker}>
        Add Worker
      </MyButton>
    </form>
  );
};

export default WorkerForm;
