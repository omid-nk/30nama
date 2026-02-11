import GenresListElem from "./components/GenresListElem";
import HeroSection from "./components/HeroSection";

import MovieList from "../../features/ui/MovieList";
import { getMostPopularMovies } from "../../services/tmdbApi";

function Home() {
  return (
    <>
      <HeroSection />
      <GenresListElem />
      <MovieList
        title="Most Popular"
        fetchFunction={getMostPopularMovies}
        viewAllPath="/movies/popular"
      />
    </>
  );
}

export default Home;
