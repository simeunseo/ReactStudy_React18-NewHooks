import Counter from "./components/Counter";
import Textbox from "./components/Textbox";
import { createStore } from "./hooks/useStore";

function App() {
  const store = createStore({ count: 0, text: "hello" });

  return (
    <>
      <Counter store={store} />
      <Textbox store={store} />
    </>
  );
}

export default App;
