import CounterCard from "./CounterCard";

function CounterList({ counters, onUpdate, onReset, onDelete }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {counters.map((c) => (
        <CounterCard
          key={c.id}
          counter={c}
          onUpdate={onUpdate}
          onReset={onReset}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default CounterList;