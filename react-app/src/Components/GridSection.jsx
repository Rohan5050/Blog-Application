import React from "react";
import Header from "./Header";

const GridSection = () => {
  return (
    <div>
      <div id="content">
        <h2>Main Grid Section</h2>
        {/* Your grid content goes here */}
      </div>

      <div className="section-under-grid">
        <h2>Section Under Grid</h2>
        <p>This section changes its theme too.</p>
      </div>
    </div>
  );
};

export default GridSection;
