import { useCallback } from "react";
import { useStore } from "../hooks/useStore";

const Counter = ({ store }) => {
  const count = useStore(
    store,
    useCallback((state) => state.count, [])
  );
  const increase = () => {
    store.setState((prev) => ({ ...prev, count: prev.count + 1 }));
  };
  return (
    <>
      {count} <button onClick={increase}>+1</button>
    </>
  );
};

export default Counter;
