function CounterCard({ counter, onUpdate, onReset, onDelete }) {
  return (
    <div className="w-full max-w-sm bg-white border border-slate-100 rounded-2xl shadow-sm p-4 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div>

          {/* this is a conditional rendering of counter nmae color based on value, 0, -ve or +ve */}
          <h2 className={
            `text-2xl font-bold text-slate-900e`+
            (counter.value === 0 ? " text-slate-900" : counter.value > 0 ? " text-green-600" : " text-red-600")
            }>{counter.name}</h2>

          {/* <h2 className="text-2xl font-bold text-slate-900">{counter.name}</h2> */}
        </div>

        <div className="text-right">
          <div className="text-3xl font-extrabold text-emerald-600 tabular-nums">{counter.value}</div>
          <p className="text-xs text-slate-400">Current value</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          aria-label={`Increase ${counter.name}`}
          onClick={() => onUpdate(counter.id, 1)}
          className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          <span className="text-xl leading-none">+</span>
        </button>

        <button
          aria-label={`Decrease ${counter.name}`}
          onClick={() => onUpdate(counter.id, -1)}
          className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-200"
        >
          <span className="text-xl leading-none">−</span>
        </button>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => onReset(counter.id)}
            className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1 text-sm text-slate-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-200"
          >
            Reset
          </button>

          <button
            onClick={() => onDelete(counter.id)}
            className="inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterCard;
