// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  FETCH_CURRENCIES,
  FETCH_EXPENSES,
  DELETE, EDITAR,
  SAVE_EDITAR } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editId: '',
  editInfo: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return { ...state, currencies: action.payload };
  case FETCH_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, {
        ...action.walletState, exchangeRates: action.expenses }] };
  case DELETE:
    return { ...state,
      expenses:
      state.expenses.filter((expense) => expense.id !== action.payload) };
  case EDITAR:
    return { ...state, editId: action.payload, editInfo: true };
  case SAVE_EDITAR:
    return { ...state, expenses: action.payload, editInfo: false, editId: '' };
  default:
    return state;
  }
};

export default wallet;
