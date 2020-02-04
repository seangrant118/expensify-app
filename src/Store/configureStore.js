import { createStore, combineReducers } from './node_modules/redux';
import expensesReducer from '../Reducers/expenses';
import filtersReducer from '../Reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
