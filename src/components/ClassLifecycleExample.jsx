import React from 'react';

export default class ClassLifecycleExample extends React.Component {
  state = { mountedAt: null };

  componentDidMount() {
    this.setState({ mountedAt: new Date().toLocaleTimeString() });
  }

  render() {
    return (
      <section>
        <h2>Class component and componentDidMount</h2>
        <p>This component mounted at: {this.state.mountedAt}</p>
      </section>
    );
  }
}