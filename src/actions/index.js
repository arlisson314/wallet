// Coloque aqui suas actions
import { USER_LOGIN, FETCH_CURRENCIES, FETCH_EXPENSES } from './actionTypes';
import fetchCoins from '../seviçes/fetchAPI';

export const userLogin = (user) => ({
  type: USER_LOGIN,
  payload: user,
});

// _______________________________________________________
export const fetchCurrenceUpdate = (currencies) => ({
  type: FETCH_CURRENCIES,
  payload: currencies,
});

export const fetchActionThunk = () => async (dispatch) => {
  const response = await fetchCoins();
  const result = Object.keys(response).filter((coin) => coin !== 'USDT');
  dispatch(fetchCurrenceUpdate(result));
};

// _______________________________________________________
export const fetchExpensesUpdate = (walletState, expenses) => ({
  type: FETCH_EXPENSES,
  expenses,
  walletState,
});

export const fetchExpensesActionThunk = (walletState) => async (dispatch) => {
  const response = await fetchCoins();
  delete response.USDT;
  dispatch(fetchExpensesUpdate(walletState, response));
};
