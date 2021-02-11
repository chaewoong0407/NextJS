import React, { useState } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const progress = () => {
  const [percent, setPercent] = useState(0);

  return (
    <div>
      <button onClick={() => setPercent(percent + 10)}>+</button>
      <button onClick={() => setPercent(percent - 10)}>-</button>
      <Progress percent={percent} />
    </div>
  );
};

export default progress;
