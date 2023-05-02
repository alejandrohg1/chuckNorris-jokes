import { useState } from 'react';
import { getJoke,getJokeByCategory } from '../utils/jokes';
import {colors} from '../data/colors'

const useJokes = () => {
  const [joksData, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  async function fetchJoke (category="random")  {

    let data = {};
    setLoading(true);
    if(category !== "random") {
      data = await getJokeByCategory(category);
    }else{
      data = await getJoke();
    }

    const newJoke = 
    {
      id: data.id,
      title: data.value.split(" ").slice(0, 3).join(" ")+'...',
      value: data.value,
      color: randomColor(),
      categories: data.categories
    }

  
    setData([...joksData, newJoke]);
    setLoading(false);
  }

  const randomColor = () => {
    return colors[Math.floor(Math.random()*colors.length)];
  }

  

  return [joksData, fetchJoke,loading];
  
}

export default useJokes;