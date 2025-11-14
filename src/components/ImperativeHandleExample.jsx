import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const ToggleBox = forwardRef(function ToggleBox(props, ref) {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggle: () => setOpen((o) => !o),
  }));

  if (!open) return null;

  return (
    <div style={{ padding: '1rem', background: '#d1fae5', marginTop: '0.5rem' }}>
      Imperative box is open. Parent can toggle me.
    </div>
  );
});

export default function ImperativeHandleExample() {
  const boxRef = useRef(null);

  return (
    <section>
      <h2>useImperativeHandle</h2>
      <button onClick={() => boxRef.current?.toggle()}>Toggle box</button>
      <ToggleBox ref={boxRef} />
    </section>
  );
}