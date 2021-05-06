import React, { useState } from 'react';
import Timer from './Timer';

const TimerContainer = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <h1></h1>
      <button onClick={() => setDisplay(!display)}>Switch Timer</button>
      {display && <Timer />}
    </div>
  );
};

export default TimerContainer;
