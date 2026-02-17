import axiosInstance from "./axiosInstance";

// پر بیننده‌ترین‌ها
export const getMostPopularMovies = (page = 1) =>
  axiosInstance.get("/discover/movie", {
    params: {
      sort_by: "popularity.desc",
      page,
    },
  });

// جزئیات فیلم
export const getMovieDetails = (id) => axiosInstance.get(`/movie/${id}`);
