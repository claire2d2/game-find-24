import React, { useRef, useEffect } from "react";
import Combo from "../components/Combo/Combo";

const ZenMode = () => {
  return (
    <div>
      <div id="cardContainer">
        <div>1</div> <div>1</div> <div>1</div> <div>1</div>
      </div>
      <Combo cardContainer={document.getElementById("cardContainer")} />
    </div>
  );
};

export default ZenMode;
