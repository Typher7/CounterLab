import CounterCard from "./CounterCard";

function CounterList({ counters, onUpdate, onReset, onDelete }) {
  return (
    <div className="counters">
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