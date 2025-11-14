import React, { useRef } from 'react';

export default function RefExample() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <section>
      <h2>Refs</h2>
      <input ref={inputRef} placeholder="Click the button to focus me" />
      <button onClick={handleFocus} style={{ marginLeft: '0.5rem' }}>
        Focus
      </button>
    </section>
  );
}