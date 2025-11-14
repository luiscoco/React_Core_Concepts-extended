import React, { useLayoutEffect, useRef, useState } from 'react';

export default function LayoutEffectExample() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setWidth(boxRef.current.getBoundingClientRect().width);
    }
  });

  return (
    <section>
      <h2>useLayoutEffect</h2>
      <div
        ref={boxRef}
        style={{
          padding: '1rem',
          background: '#e5e7eb',
          resize: 'horizontal',
          overflow: 'auto',
          maxWidth: '100%',
        }}
      >
        Resize this box horizontally.
      </div>
      <p>Measured width: {Math.round(width)}px</p>
    </section>
  );
}