const fetchCoins = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currence = await response.json();
  return currence;
};
export default fetchCoins;
