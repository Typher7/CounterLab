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
    <form className="add-counter" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter counter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Counter</button>
    </form>
  );
}

export default AddCounterForm;
