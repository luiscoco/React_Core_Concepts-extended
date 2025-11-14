import React, { useState } from 'react';

export default function ControlledFormExample() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Hello, ${name || 'stranger'}!`);
  };

  return (
    <section>
      <h2>Controlled form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            style={{ marginLeft: '0.5rem' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit" style={{ marginLeft: '0.5rem' }}>
          Send
        </button>
      </form>
      {message && <p style={{ marginTop: '0.5rem' }}>{message}</p>}
    </section>
  );
}