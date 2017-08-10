// Create and export the reducer function

// The reducer function takes a default state object as first param and the action as a second param

// The reducer should always return a *new* state after processing the previous state based on the action type

export default function(state = {
    count: 0
  }, action) {
    let newState = {};

    switch(action.type) {
      case 'ADD': {
        newState = {
          ...state,
          count: state.count + 1
        }

        break;
      }

      case 'SUBTRACT': {
        newState = {
          ...state,
          count: state.count - 1
        }

        break;
      }

      default: {
        newState = {
          ...state
        }

        break;
      }
    }

    return newState;
  }
