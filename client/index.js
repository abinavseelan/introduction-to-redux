import React, { Component } from 'react';
import { render } from 'react-dom';

import styles from './index.scss';

const APP_CONTAINER_NAME = 'app-container';

class App extends Component {
  constructor (args) {
    super(args);
    // Give this component a state variable to hold the result of the operations
    this.state = {
      count: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    event.preventDefault();
    // event.target.name contains the type of operator
    // How about spinning up some logic to update the state based on the operator selected? =)
    // Hint: this.setState();
    const type = event.target.name;

    if (type === 'add') {
      this.setState({
        count: this.state.count + 1
      });
    }

    if (type === 'subtract') {
      this.setState({
        count: this.state.count - 1
      });
    }

  }
  render () {
    // You'll have to display the count on L25
    // You'll have to add the abvoe handler to the buttons as well.
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>{`Counter: ${this.state.count}`}</h1>

          <div className={styles.ctas}>
            <button name="add" onClick={this.handleClick} className={styles['btn-add']}>Add 1</button>
            <button name="subtract" onClick={this.handleClick} className={styles['btn-subtract']}>Subtract 1</button>
          </div>
        </div>
      </div>
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
