# React Core Concepts Sample

This Vite + React playground demonstrates many core React concepts through small, focused examples. It is designed to be a quick reference: click a route in the UI, see the concept in action, and inspect the corresponding component for the minimal code needed to explain the idea.

## Demo 

<img width="1549" height="406" alt="image" src="https://github.com/user-attachments/assets/922e1d2c-e6bd-40a1-a285-78333f4f082f" />

## Features (with snippets)

Each feature maps to one route in `src/App.jsx` and one component in `src/components/`.

### 1) State with `useState` (`src/components/StateExample.jsx`)

<img width="274" height="232" alt="image" src="https://github.com/user-attachments/assets/e2b43cb6-e39d-4257-a17d-fb0cbf676330" />

```jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>Increment</button>
```

### 2) Effects and cleanup (`src/components/EffectExample.jsx`)

<img width="377" height="175" alt="image" src="https://github.com/user-attachments/assets/5aca7f02-1fca-47b3-bc5d-1a697ec932d3" />

```jsx
useEffect(() => {
  const id = setInterval(() => setSeconds((prev) => prev + 1), 1000);
  return () => clearInterval(id);
}, []);
```

### 3) Context and `useContext` (`src/components/ContextExample.jsx`)

<img width="531" height="374" alt="image" src="https://github.com/user-attachments/assets/94810383-9fca-4799-8619-6a998b717e50" />

```jsx
const ThemeContext = createContext();
<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
```

### 4) Lifting state up (`src/components/LiftingStateExample.jsx`)

<img width="531" height="316" alt="image" src="https://github.com/user-attachments/assets/d40cf85c-7940-492a-b733-2b75e9720e14" />

```jsx
<TemperatureInput value={celsius} onChange={handleCelsiusChange} />
<TemperatureInput value={fahrenheit} onChange={handleFahrenheitChange} />
```

### 5) Controlled forms (`src/components/ControlledFormExample.jsx`)

<img width="534" height="263" alt="image" src="https://github.com/user-attachments/assets/39729a6a-608b-4b75-a74a-1003607d8a27" />

```jsx
<input value={name} onChange={(e) => setName(e.target.value)} />
```

### 6) Class lifecycle (`src/components/ClassLifecycleExample.jsx`)

<img width="658" height="230" alt="image" src="https://github.com/user-attachments/assets/6a1e0570-647d-4629-a671-9d58aa10a19d" />

```jsx
componentDidMount() {
  this.setState({ mountedAt: new Date().toLocaleTimeString() });
}
```

### 7) Reducers (`src/components/ReducerExample.jsx`)

<img width="772" height="272" alt="image" src="https://github.com/user-attachments/assets/167f1536-6c5e-4d89-8a71-45f6a851c320" />

```jsx
const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: 'increment' });
```

### 8) Memoization and callbacks (`src/components/MemoExample.jsx`)

<img width="845" height="403" alt="image" src="https://github.com/user-attachments/assets/10a74bfd-7570-4e24-8ba1-e84ab4ccbf2e" />

```jsx
const doubled = useMemo(() => count * 2, [count]);
const handleChange = useCallback((e) => setText(e.target.value), []);
```

### 9) Refs (`src/components/RefExample.jsx`)

```jsx
const inputRef = useRef(null);
inputRef.current?.focus();
```

### 10) `forwardRef` (`src/components/ForwardRefExample.jsx`)

```jsx
const FancyInput = forwardRef(function FancyInput(props, ref) {
  return <input ref={ref} {...props} />;
});
```

### 11) Portals (`src/components/PortalExample.jsx`)

```jsx
return ReactDOM.createPortal(<div>Portal content</div>, portalRoot);
```

### 12) Lazy loading + Suspense (`src/components/SuspenseLazyExample.jsx`)

```jsx
const LazyGreeting = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ default: () => <p>Hello!</p> }), 1000);
  });
});
<Suspense fallback={<p>Loading greeting.</p>}><LazyGreeting /></Suspense>
```

### 13) Layout effects (`src/components/LayoutEffectExample.jsx`)

```jsx
useLayoutEffect(() => {
  setWidth(boxRef.current.getBoundingClientRect().width);
});
```

### 14) Imperative handles (`src/components/ImperativeHandleExample.jsx`)

```jsx
useImperativeHandle(ref, () => ({ toggle: () => setOpen((o) => !o) }));
```

### 15) Error boundaries (`src/components/ErrorBoundary.jsx`)

```jsx
static getDerivedStateFromError() {
  return { hasError: true };
}
```

### 16) Client-side routing (`src/App.jsx`)

```jsx
<Routes>
  <Route path="/state" element={<StateExample />} />
</Routes>
```

## How to run

### 1) Install dependencies:

```bash
npm install
```

### 2) Start the dev server:

```bash
npm run dev
```

### 3) Open the URL shown in your terminal (usually http://localhost:5173).

Then click through the navigation links at the top to explore each concept.

## File purpose guide

- `index.html`: Root HTML shell for Vite, includes `#root` and `#portal-root` containers for React and portals.
- `package.json`: Project metadata, dependencies, and scripts (`dev`, `build`, `preview`).
- `vite.config.mjs`: Vite configuration with the React plugin.
- `src/main.jsx`: Entry point; mounts React into `#root` and wires up `BrowserRouter`.
- `src/App.jsx`: Top-level UI; defines the nav and routes and wraps the app in the theme provider and error boundary.
- `src/components/ClassLifecycleExample.jsx`: Class component example using `componentDidMount`.
- `src/components/ContextExample.jsx`: Theme context provider and consumer example.
- `src/components/ControlledFormExample.jsx`: Controlled input and submit handling.
- `src/components/EffectExample.jsx`: Interval effect with cleanup.
- `src/components/ErrorBoundary.jsx`: Error boundary fallback UI and logging.
- `src/components/ForwardRefExample.jsx`: `forwardRef` usage to pass refs to a child input.
- `src/components/ImperativeHandleExample.jsx`: `useImperativeHandle` to expose a toggle API.
- `src/components/LayoutEffectExample.jsx`: `useLayoutEffect` measurement after DOM layout.
- `src/components/LiftingStateExample.jsx`: Shared state between temperature inputs.
- `src/components/MemoExample.jsx`: `React.memo`, `useMemo`, and `useCallback` demonstration.
- `src/components/PortalExample.jsx`: Portal UI rendered into `#portal-root`.
- `src/components/ReducerExample.jsx`: `useReducer` counter example.
- `src/components/RefExample.jsx`: `useRef` focus example.
- `src/components/StateExample.jsx`: Minimal `useState` counter.
- `src/components/SuspenseLazyExample.jsx`: `React.lazy` and `Suspense` with a delayed import.
