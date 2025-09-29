import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddCounterForm from "./components/AddCounterForm";
import CounterList from "./components/CounterList";

function App() {
  const STORAGE_KEY = "multi-counter:counters";

  const [counters, setCounters] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      // If parsing fails, fall back to empty list
      console.error("Failed to read counters from localStorage:", e);
      return [];
    }
  });

  const addCounter = (name) => {
    if (name.trim() === "") return;
    setCounters((prev) => [...prev, { id: Date.now(), name, value: 0 }]);
  };

  const updateCounter = (id, change) => {
    setCounters((prev) => prev.map((c) => (c.id === id ? { ...c, value: c.value + change } : c)));
  };

  const resetCounter = (id) => {
    setCounters((prev) => prev.map((c) => (c.id === id ? { ...c, value: 0 } : c)));
  };

  const deleteCounter = (id) => {
    setCounters((prev) => prev.filter((c) => c.id !== id));
  };

  // Persist counters to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(counters));
    } catch (e) {
      console.error("Failed to save counters to localStorage:", e);
    }
  }, [counters]);

  // Cross-tab sync: listen for storage events
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== STORAGE_KEY) return;
      try {
        const next = e.newValue ? JSON.parse(e.newValue) : [];
        setCounters(next);
      } catch (err) {
        console.error("Failed to parse counters from storage event:", err);
      }
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const total = counters.reduce((sum, c) => sum + c.value, 0);

  const resetAll = () => {
    setCounters((prev) => prev.map((c) => ({ ...c, value: 0 })));
  };

  const deleteAll = () => {
    setCounters([]);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="sticky top-0 z-10">
        <Header total={total} onResetAll={resetAll} onDeleteAll={deleteAll} hasCounters={counters.length > 0} />
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <AddCounterForm onAdd={addCounter} />

        <section className="mt-16">
          <CounterList
            counters={counters}
            onUpdate={updateCounter}
            onReset={resetCounter}
            onDelete={deleteCounter}
          />
        </section>
      </main>
    </div>
  );
}

export default App;