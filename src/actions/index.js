// Coloque aqui suas actions
// import { USER_LOGIN } from './actionTypes';
export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = (user) => ({
  type: 'USER_LOGIN',
  payload: user,
});

// export const fetchCurrenceUpdate = (currencies) => ({
//   type: FETCH_CURRENCIES,
//   currencies,
// });
