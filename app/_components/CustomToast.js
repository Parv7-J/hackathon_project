export const CustomToast = ({ message, action }) => (
  <div className="relative flex items-center gap-4 justify-between w-full max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
    <span className="text-sm font-medium text-gray-800">{message}</span>
    {action && (
      <button
        onClick={action.onClick}
        className="px-3 py-1 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors flex-shrink-0"
      >
        {action.label}
      </button>
    )}
  </div>
);
