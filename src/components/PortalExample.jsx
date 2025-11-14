import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function PortalMessage({ onClose }) {
  const portalRoot = document.getElementById('portal-root');
  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,0,0,0.4)'
    }}>
      <div style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem' }}>
        <p>This content is rendered via a portal.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    portalRoot
  );
}

export default function PortalExample() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <h2>Portals</h2>
      <button onClick={() => setOpen(true)}>Open portal message</button>
      {open && <PortalMessage onClose={() => setOpen(false)} />}
    </section>
  );
}