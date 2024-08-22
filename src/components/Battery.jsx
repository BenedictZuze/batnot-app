import React from "react";

const Battery = ({ charge }) => {
  // Ensure charge is between 0 and 100
  const safeCharge = Math.max(0, Math.min(100, charge));

  // Determine the color based on the charge level
  const getColor = () => {
    if (safeCharge > 60) return "bg-green-500";
    if (safeCharge > 20) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="flex items-center">
      <div className="w-16 h-8 border-2 border-gray-400 rounded-lg p-1 flex">
        <div
          className={`h-full ${getColor()} rounded-sm transition-all duration-300 ease-in-out`}
          style={{ width: `${safeCharge}%` }}
        ></div>
      </div>
      <div className="w-1 h-4 bg-gray-400 rounded-r-sm"></div>
    </div>
  );
};

export default Battery;
