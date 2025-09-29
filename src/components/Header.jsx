function Header({ total, onResetAll, onDeleteAll, hasCounters }) {
  const handleDeleteAll = () => {
    if (!hasCounters) return;
    const ok = window.confirm("Delete all counters? This cannot be undone.");
    if (ok) onDeleteAll();
  };

  return (
  <header className="bg-gradient-to-r from-emerald-600 to-green-500 text-white py-6 shadow-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/counter.png" alt="Counter Icon" className="h-10 w-10" />
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
              className="inline-flex items-center gap-2 rounded-md bg-white/50 px-3 py-2 text-sm text-white hover:bg-white/20 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Reset all
            </button>

            <button
              onClick={handleDeleteAll}
              disabled={!hasCounters}
              className="inline-flex items-center gap-2 rounded-md bg-rose-600 px-3 py-2 text-sm text-white hover:bg-rose-700 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-rose-300"
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