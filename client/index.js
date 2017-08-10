import React, { Component } from 'react';
import { render } from 'react-dom';

const APP_CONTAINER_NAME = 'app-container';

class App extends Component {
  render () {
    return (
      <h1>Hello World!</h1>
    )
  }
}

window.addEventListener('DOMContentLoaded', () => {
  let appContainer = document.getElementById(APP_CONTAINER_NAME);

  if (!appContainer) {
    appContainer = document.createElement('DIV');
    appContainer.id = APP_CONTAINER_NAME;
    document.body.appendChild(appContainer);
  }

  render(<App />, appContainer);
});
