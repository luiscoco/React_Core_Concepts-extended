import React, { useEffect, useState } from 'react';

export default function EffectExample() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <section>
      <h2>useEffect and cleanup</h2>
      <p>Seconds since you opened this view: {seconds}</p>
    </section>
  );
}