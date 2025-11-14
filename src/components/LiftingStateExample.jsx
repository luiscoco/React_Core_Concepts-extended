import React, { useState } from 'react';

function TemperatureInput({ label, value, onChange }) {
  return (
    <label style={{ display: 'block', marginBottom: '0.5rem' }}>
      {label}
      <input
        style={{ marginLeft: '0.5rem' }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export default function LiftingStateExample() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (value) => {
    setCelsius(value);
    const number = parseFloat(value);
    if (!Number.isNaN(number)) {
      setFahrenheit(((number * 9) / 5 + 32).toFixed(1));
    } else {
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    const number = parseFloat(value);
    if (!Number.isNaN(number)) {
      setCelsius(((number - 32) * 5 / 9).toFixed(1));
    } else {
      setCelsius('');
    }
  };

  return (
    <section>
      <h2>Lifting state up</h2>
      <p>Both inputs share the same state in their parent.</p>
      <TemperatureInput
        label="Celsius"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <TemperatureInput
        label="Fahrenheit"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </section>
  );
}