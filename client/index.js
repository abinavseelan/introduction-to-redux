import React, { Component } from 'react';
import { render } from 'react-dom';
// Get the `Provider` component from `react-redux`

// Get the `connect` function from `react-redux`

// Get the `store` from `./store`

import styles from './index.scss';

const APP_CONTAINER_NAME = 'app-container';

class App extends Component {
  constructor (args) {
    super(args);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    event.preventDefault();
    const type = event.target.name;
    // Dispatch the action to modify the count here
  }
  render () {
    // The count is no longer in the state, you'll have to get it from the store
    // You'll have to map the store to the props using the connect function :)
    // Display the count on L31
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>{`Counter: `}</h1>

          <div className={styles.ctas}>
            <button name="add" onClick={this.handleClick} className={styles['btn-add']}>Add 1</button>
            <button name="subtract" onClick={this.handleClick} className={styles['btn-subtract']}>Subtract 1</button>
          </div>
        </div>
      </div>
    )
  }
}

// create a function to map the state(store) to props here

window.addEventListener('DOMContentLoaded', () => {
  let appContainer = document.getElementById(APP_CONTAINER_NAME);

  if (!appContainer) {
    appContainer = document.createElement('DIV');
    appContainer.id = APP_CONTAINER_NAME;
    document.body.appendChild(appContainer);
  }

  // Wrap the <App/> component in the connect method to map the store to the props
  render(<App />, appContainer);
});
