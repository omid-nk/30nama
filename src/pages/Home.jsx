import HeroSlider from "./components/homePage/HeroSlider";
import GenresListElem from "./components/homePage/GenresListElem";
import PopularMovies from "./components/homePage/PopularMovies";

function Home() {
  return (
    <>
      <HeroSlider />
      <GenresListElem />
      <PopularMovies />
    </>
  );
}

export default Home;
