import React, { Suspense } from 'react';

const LazyGreeting = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        default: function Greeting() {
          return <p>Hello from a lazy-loaded component!</p>;
        },
      });
    }, 1000);
  });
});

export default function SuspenseLazyExample() {
  return (
    <section>
      <h2>Suspense and lazy loading</h2>
      <p>The greeting below is loaded lazily:</p>
      <Suspense fallback={<p>Loading greeting…</p>}>
        <LazyGreeting />
      </Suspense>
    </section>
  );
}