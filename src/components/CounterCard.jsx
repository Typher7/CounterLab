function CounterCard({ counter, onUpdate, onReset, onDelete }) {
  return (
    <div className="counter">
      <h3>{counter.name}: {counter.value}</h3>
      <div className="buttons">
        <button onClick={() => onUpdate(counter.id, 1)}>Increase</button>
        <button onClick={() => onUpdate(counter.id, -1)}>Decrease</button>
        <button onClick={() => onReset(counter.id)}>Reset</button>
        <button onClick={() => onDelete(counter.id)}>Delete</button>
      </div>
    </div>
  );
}

export default CounterCard;
