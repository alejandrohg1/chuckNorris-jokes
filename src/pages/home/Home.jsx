import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import Slider from "../../components/Slider";
import useJokes from "../../hooks/useJoke";
import BubbleCategory from "../../components/BubbleCategory";

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState("random");
  const [jokeData, addJoke, loading] = useJokes();
  const [isOpen, setOpen] = useState(false);

  const changeCategory = (category) => {
    setCurrentCategory((currentCategory) => category);
  };

  const fetchNewJoke = () => {
    addJoke(currentCategory);
  };

  return (
    <div className='flex w-full min-h-full overflow-hidden absolute '>
      <BubbleCategory currentCategory={currentCategory} isOpen={isOpen}></BubbleCategory>
      <Sidebar
        currentCategory={currentCategory}
        changeCategory={changeCategory}
        isOpen={isOpen}
        toggle={setOpen}
      ></Sidebar>

      <Slider
        data={jokeData}
        loading={loading}
        fetchNewJoke={fetchNewJoke}
      ></Slider>
    </div>
  );
};

export default Home;
