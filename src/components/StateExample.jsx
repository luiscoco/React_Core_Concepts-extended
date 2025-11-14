import React, { useState } from 'react';

export default function StateExample() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>State and setState</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </section>
  );
}