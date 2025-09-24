import { useState } from "react";
import Header from "./components/Header";
import AddCounterForm from "./components/AddCounterForm";
import CounterList from "./components/CounterList";

function App() {
  const [counters, setCounters] = useState([]);

  const addCounter = (name) => {
    if (name.trim() === "") return;
    setCounters([...counters, { id: Date.now(), name, value: 0 }]);
  };

  const updateCounter = (id, change) => {
    setCounters(
      counters.map((c) =>
        c.id === id ? { ...c, value: c.value + change } : c
      )
    );
  };

  const resetCounter = (id) => {
    setCounters(counters.map((c) => (c.id === id ? { ...c, value: 0 } : c)));
  };

  const deleteCounter = (id) => {
    setCounters(counters.filter((c) => c.id !== id));
  };

  const total = counters.reduce((sum, c) => sum + c.value, 0);

  return (
    <div className="app">
      <Header total={total} />
      <AddCounterForm onAdd={addCounter} />
      <CounterList
        counters={counters}
        onUpdate={updateCounter}
        onReset={resetCounter}
        onDelete={deleteCounter}
      />
    </div>
  );
}

export default App;