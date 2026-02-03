import { fetchFromTMDB } from "../../services/tmdb";

export function getPopularMovies() {
  return fetchFromTMDB("/movie/popular");
}
