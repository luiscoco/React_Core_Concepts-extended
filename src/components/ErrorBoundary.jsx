import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error boundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section>
          <h2>Something went wrong.</h2>
          <p>This is fallback UI from an error boundary.</p>
        </section>
      );
    }

    return this.props.children;
  }
}