import React, { useState, useMemo, useCallback } from 'react';

const SlowLabel = React.memo(function SlowLabel({ value }) {
  let total = 0;
  for (let i = 0; i < 300000; i++) {
    total += value;
  }
  return <p>Expensive total: {total}</p>;
});

export default function MemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const doubled = useMemo(() => count * 2, [count]);

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <section>
      <h2>React.memo, useMemo, useCallback</h2>
      <p>Count: {count}</p>
      <p>Doubled (memoized): {doubled}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      <div style={{ marginTop: '0.5rem' }}>
        <label>
          Type something (uses useCallback):
          <input
            style={{ marginLeft: '0.5rem' }}
            value={text}
            onChange={handleChange}
          />
        </label>
      </div>

      <SlowLabel value={count} />
    </section>
  );
}