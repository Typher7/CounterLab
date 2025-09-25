function Header({ total }) {
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

        <div className="text-right">
          <p className="text-sm text-white/80">Total Sum</p>
          <p className="mt-1 text-2xl font-bold tabular-nums">{total}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;