import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class App extends Component {
  render() {
    return (
      <div>
        Hello
      </div>
    )
  }

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

