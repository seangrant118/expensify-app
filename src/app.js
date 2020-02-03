import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './Store/configureStore';
import getVisibleExpenses from './Selectors/expenses';
import { addExpense } from './Actions/expenses';
import { setTextFilter } from './Actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: "Water Bill", amount: 500}));
store.dispatch(addExpense({ description: "Gas Bill", amount: 5000, createdAt: 1000}));
store.dispatch(addExpense({ description: "Rent", amount: 50000}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));