import React, { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function AppError({ error, resetErrorBoundary }) {
  useEffect(() => {
    console.log("Error From This Page :", error);
  },[error]);

  return (
    <div>
      <p className="text-dark h2">Something Went Wrong</p>
      <p className="text-dark mb-0">Error Reported To Admin</p>
      <button className="btn btn-primary" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}

export default AppError;