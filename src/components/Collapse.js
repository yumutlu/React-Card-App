import React from "react";

function Collapse(props) {
  return (
    <div>
    
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Link with href
        </a>
    
     
      <div class="collapse" id="collapseExample">
      Tıkla
      </div>
    </div>
  );
}
export default Collapse;
