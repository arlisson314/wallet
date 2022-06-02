const fetchCoins = async () => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currence = await response.json();
    return currence;
  } catch (error) {
    console.log(error, 'error na requisição da  api');
  }
};

export default fetchCoins;
