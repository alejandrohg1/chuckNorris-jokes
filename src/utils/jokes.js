export const getJoke = async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await response.json();
  return data;
}

export const getJokeByCategory = async (category) => {
  const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
  const data = await response.json();
  return data;
}



