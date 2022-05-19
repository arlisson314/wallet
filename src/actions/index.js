// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';

export const userLogin = (user) => ({
  type: USER_LOGIN,
  payload: user,
});
