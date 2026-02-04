import HeroSlider from "./components/homePage/HeroSlider";
import GenresListElem from "./components/homePage/GenresListElem";
import PopularMovies from "./components/homePage/PopularMovies";
import CategoriesElem from "./components/homePage/CategoriesElem";

function Home() {
  return (
    <>
      <HeroSlider />
      <GenresListElem />
      <PopularMovies />
      <CategoriesElem />
    </>
  );
}

export default Home;
