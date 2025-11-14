import React, { forwardRef, useRef } from 'react';

const FancyInput = forwardRef(function FancyInput(props, ref) {
  return <input ref={ref} {...props} />;
});

export default function ForwardRefExample() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <section>
      <h2>forwardRef</h2>
      <FancyInput ref={inputRef} placeholder="Forwarded ref input" />
      <button onClick={handleClick} style={{ marginLeft: '0.5rem' }}>
        Focus via parent
      </button>
    </section>
  );
}