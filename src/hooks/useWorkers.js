import { useMemo } from "react";

export const useSortedWorkers = (workers, sort) => {
  const sortedWorkers = useMemo(() => {
    if (sort.length) {
      return [...workers].filter((obj) => obj.department === sort);
    } else {
      return workers;
    }
  }, [sort, workers]);

  return sortedWorkers;
};

export const useWorkers = (workers, sort, query) => {
  const sortedWorkers = useSortedWorkers(workers, sort);
  const sortedAndSearchedWorkers = useMemo(() => {
    return sortedWorkers.filter(
      (obj) =>
        obj.firstName.toLowerCase().includes(query.toLowerCase()) ||
        obj.lastName.toLowerCase().includes(query.toLowerCase()) ||
        obj.department.toLowerCase().includes(query.toLowerCase()) ||
        obj.currency.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedWorkers]);
  return sortedAndSearchedWorkers;
};
