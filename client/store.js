// Get the `createStore` and `combineReducers` functions from `redux`
import { createStore, combineReducers } from 'redux';

// Get the reducer from `./reducer`
import counter from './reducer';

// Generate the store object using `createStore` (combine the `reducer`) and export it
export default createStore(
  combineReducers({
    counter
  })
);

