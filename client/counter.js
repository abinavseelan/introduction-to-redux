import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './index.scss';


class Counter extends Component {
  constructor(args) {
    super(args);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const type = event.target.name;
    // Dispatch the action to modify the count here
    this.props.dispatch({
      type: type
    });
  }
  render() {
    // The count is no longer in the state, you'll have to get it from the store
    // You'll have to map the store to the props using the connect function :)
    // Display the count on L31
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>{`Counter: ${this.props.counter.count}`}</h1>

          <div className={styles.ctas}>
            <button name="ADD" onClick={this.handleClick} className={styles['btn-add']}>Add 1</button>
            <button name="SUBTRACT" onClick={this.handleClick} className={styles['btn-subtract']}>Subtract 1</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(mapStateToProps)(Counter);

