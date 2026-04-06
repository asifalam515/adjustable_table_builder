export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 px-6">
      <div className="max-w-2xl w-full text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center">
            <svg
              className="h-8 w-8 text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 3h.01M4.93 19h14.14c1.54 0 2.5-1.66 1.73-3L13.73 4c-.77-1.34-2.69-1.34-3.46 0L3.2 16c-.77 1.34.19 3 1.73 3z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Temporary Maintenance
        </h1>

        {/* Message */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Hi, I’m currently making some server-side updates and improvements, so
          the website is temporarily down. I’ll restore everything once the work
          is finalized. Thanks for your patience.
        </p>

        {/* Status badge */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm">
          <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></span>
          Under Maintenance
        </div>

        {/* Footer note */}
        <div className="mt-8 text-xs text-gray-500">
          We appreciate your understanding
        </div>
      </div>
    </div>
  );
}
