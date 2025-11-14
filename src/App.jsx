import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StateExample from './components/StateExample.jsx';
import EffectExample from './components/EffectExample.jsx';
import ContextExample, { ThemeProvider } from './components/ContextExample.jsx';
import LiftingStateExample from './components/LiftingStateExample.jsx';
import ControlledFormExample from './components/ControlledFormExample.jsx';
import ClassLifecycleExample from './components/ClassLifecycleExample.jsx';
import ReducerExample from './components/ReducerExample.jsx';
import MemoExample from './components/MemoExample.jsx';
import RefExample from './components/RefExample.jsx';
import ForwardRefExample from './components/ForwardRefExample.jsx';
import PortalExample from './components/PortalExample.jsx';
import SuspenseLazyExample from './components/SuspenseLazyExample.jsx';
import LayoutEffectExample from './components/LayoutEffectExample.jsx';
import ImperativeHandleExample from './components/ImperativeHandleExample.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ fontFamily: 'system-ui, sans-serif', padding: '1.5rem' }}>
        <h1>React Core Concepts Playground</h1>
        <p>Small, focused examples for many core React concepts.</p>

        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          <Link to="/">Home</Link>
          <Link to="/state">State</Link>
          <Link to="/effect">Effect</Link>
          <Link to="/context">Context</Link>
          <Link to="/lifting-state">Lifting state</Link>
          <Link to="/controlled-form">Controlled form</Link>
          <Link to="/class-lifecycle">Class lifecycle</Link>
          <Link to="/reducer">useReducer</Link>
          <Link to="/memo">Memo</Link>
          <Link to="/refs">Refs</Link>
          <Link to="/forward-ref">forwardRef</Link>
          <Link to="/portal">Portal</Link>
          <Link to="/suspense">Suspense</Link>
          <Link to="/layout-effect">useLayoutEffect</Link>
          <Link to="/imperative-handle">useImperativeHandle</Link>
        </nav>

        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<p>Select a concept from the navigation above.</p>} />
            <Route path="/state" element={<StateExample />} />
            <Route path="/effect" element={<EffectExample />} />
            <Route path="/context" element={<ContextExample />} />
            <Route path="/lifting-state" element={<LiftingStateExample />} />
            <Route path="/controlled-form" element={<ControlledFormExample />} />
            <Route path="/class-lifecycle" element={<ClassLifecycleExample />} />
            <Route path="/reducer" element={<ReducerExample />} />
            <Route path="/memo" element={<MemoExample />} />
            <Route path="/refs" element={<RefExample />} />
            <Route path="/forward-ref" element={<ForwardRefExample />} />
            <Route path="/portal" element={<PortalExample />} />
            <Route path="/suspense" element={<SuspenseLazyExample />} />
            <Route path="/layout-effect" element={<LayoutEffectExample />} />
            <Route path="/imperative-handle" element={<ImperativeHandleExample />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </ThemeProvider>
  );
}