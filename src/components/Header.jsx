function Header({ total, onResetAll, onDeleteAll, hasCounters }) {
  const handleDeleteAll = () => {
    if (!hasCounters) return;
    const ok = window.confirm("Delete all counters? This cannot be undone.");
    if (ok) onDeleteAll();
  };

  return (
    <header className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-6 shadow-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <svg
            className="h-10 w-10 text-white/90"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1z"
              fill="currentColor"
            />
            <path
              d="M5 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1z"
              fill="currentColor"
              opacity="0.8"
            />
            <path
              d="M19 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1z"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>

          <div>
            <h1 className="text-xl font-semibold tracking-tight">Counter Dashboard</h1>
            <p className="text-sm text-white/90">Manage your counters quickly</p>
          </div>
        </div>

        <div className="text-right flex items-center gap-4">
          <div className="text-right mr-4">
            <p className="text-sm text-white/80">Total Sum</p>
            <p className="mt-1 text-2xl font-bold tabular-nums">{total}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onResetAll}
              disabled={!hasCounters}
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Reset all
            </button>

            <button
              onClick={handleDeleteAll}
              disabled={!hasCounters}
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Delete all
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;