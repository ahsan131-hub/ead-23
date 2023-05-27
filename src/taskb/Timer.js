import React, { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
      if (time <= 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      {time <= 0 ? <h3>Times Up!</h3> : <h3>{time}</h3>}
    </div>
  );
}
