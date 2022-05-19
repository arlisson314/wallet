// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_CURRENCIES } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default wallet;
