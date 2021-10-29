import React, { useState } from "react";
const emptyWorkerForm = {
  firstName: "",
  lastName: "",
  department: "",
  salary: 0,
  currency: "USD",
};
const WorkerForm = ({ create, workerId }) => {
  const [worker, setWorker] = useState(emptyWorkerForm);

  const addWorker = (e) => {
    e.preventDefault();
    const newWorker = {
      ...worker,
      id: worker.length,
    };
    create(newWorker);
    setWorker(emptyWorkerForm);
  };
  console.log(worker);

  return (
    <form>
      <input
        value={worker.firstName}
        onChange={(e) => setWorker({ ...worker, firstName: e.target.value })}
        type="text"
        placeholder="First name"
      />
      <input
        value={worker.lastName}
        onChange={(e) => setWorker({ ...worker, lastName: e.target.value })}
        type="text"
        placeholder="Last name"
      />
      <input
        value={worker.department}
        onChange={(e) => setWorker({ ...worker, department: e.target.value })}
        type="text"
        placeholder="Department"
      />
      <input
        value={worker.salary}
        onChange={(e) => setWorker({ ...worker, salary: e.target.value })}
        type="number"
        placeholder="Salary"
      />

      <button onClick={addWorker}>Add Worker</button>
    </form>
  );
};

export default WorkerForm;
