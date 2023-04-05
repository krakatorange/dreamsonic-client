import React from "react";
import "../spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
        <div className="loading-overlay">
            {/* <div class="loader"><span class="pulsate ">Анализируем ваш сон</span></div> */}
          <div className="loader">
            <span className="pulsate ">
              Analyzing your dream
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}