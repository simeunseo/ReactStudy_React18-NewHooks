import { useCallback } from "react";
import { createStore, useStore } from "../hooks/useStore";
import Textbox from "./Textbox";

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
