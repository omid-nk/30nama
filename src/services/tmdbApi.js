import axiosInstance from "./axiosInstance";

// جدیدترین‌ها (در حال اکران)
export const getNewestMovies = (page = 1) =>
  axiosInstance.get("/movie/now_playing", {
    params: { page },
  });

// پر بیننده‌ترین‌ها
export const getMostPopularMovies = (page = 1) =>
  axiosInstance.get("/discover/movie", {
    params: {
      sort_by: "popularity.desc",
      page,
    },
  });

// آخرین فیلم‌ها
export const getLatestMovies = (page = 1) =>
  axiosInstance.get("/discover/movie", {
    params: {
      sort_by: "release_date.desc",
      page,
    },
  });

// آخرین سریال‌ها
export const getLatestSeries = (page = 1) =>
  axiosInstance.get("/discover/tv", {
    params: {
      sort_by: "first_air_date.desc",
      page,
    },
  });

// آخرین انیمیشن‌ها
export const getLatestAnimations = (page = 1) =>
  axiosInstance.get("/discover/movie", {
    params: {
      with_genres: 16,
      sort_by: "release_date.desc",
      page,
    },
  });

// جزئیات فیلم
export const getMovieDetails = (id) => axiosInstance.get(`/movie/${id}`);

// جزئیات سریال
export const getTvDetails = (id) => axiosInstance.get(`/tv/${id}`);
