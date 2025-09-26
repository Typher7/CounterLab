import { useState } from "react";

function AddCounterForm({ onAdd }) {
  const [name, setName] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    onAdd(name);
    setName("");
  };

  return (
    <form
      className="max-w-4xl mx-auto mt-6 px-4 sm:px-6 lg:px-8"
      onSubmit={handleAdd}
      aria-label="Add new counter"
    >
      <div className="flex gap-3">
        <label htmlFor="counter-name" className="sr-only">
          Counter name
        </label>

        <input
          id="counter-name"
          type="text"
          placeholder="Enter counter name"
          value={name}
          onChange={(e) => {
            let value = e.target.value;
            if (value.length > 17) { // change 10 to whatever max length you want
              value = value.slice(0, 14) + "...";
            }
            setName(value);
          }} className="flex-1 rounded-md border border-slate-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
        />

        <button
          type="submit"
          disabled={name.trim().length < 3}
          className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-white font-semibold shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          Add Counter
        </button>
      </div>
    </form>
  );
}

export default AddCounterForm;
