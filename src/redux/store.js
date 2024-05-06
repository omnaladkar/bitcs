// Import necessary functions and middleware from Redux and Redux-Thunk
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

// Import the jobReducer from where it is defined
import jobReducer from './reducers/jobReducer';

// Combine reducers if there are more reducers, here we have only one
const rootReducer = combineReducers({
  job: jobReducer, // This syntax means the state will have a 'job' field managed by jobReducer
});

// Create the Redux store with the root reducer and middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply thunk middleware to allow async actions
);

// Export the store to be provided to the React app
export default store;
