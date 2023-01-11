import React from "react";
import "./error-page.css";

export const ErrorComponent = () => {
  return (
    <div className='error-page'>
      <h1>Error Occurred</h1>
      <p>Can't render page. Please try again</p>
      <p className="secondary-color">(The To Do app project must be running)</p>
    </div>
  );
};