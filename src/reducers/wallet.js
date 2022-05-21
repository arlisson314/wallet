// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_CURRENCIES, FETCH_EXPENSES, DELETE } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
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
  default:
    return state;
  }
};

export default wallet;
