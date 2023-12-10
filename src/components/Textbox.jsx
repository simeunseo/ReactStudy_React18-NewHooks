import { useCallback } from "react";
import { useStore } from "../hooks/useStore";

const Textbox = ({ store }) => {
  const text = useStore(
    store,
    useCallback((state) => state.text, [])
  );

  const setText = (event) => {
    store.setState((prev) => ({ ...prev, text: event.target.value }));
  };

  return (
    <>
      <input value={text} onChange={setText} />
    </>
  );
};

export default Textbox;
