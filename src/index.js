import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { Setup } from './components/Setup/Setup';
import { EntrySetup } from './components/EntrySetup/EntrySetup';
import "./index.css"

class App extends Component {
  render() {
    return (
      <div className="main">
        <EntrySetup />
        <Setup />
      </div>
    )
  }

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

