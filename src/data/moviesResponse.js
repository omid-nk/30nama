import shawshank from "/images/movies/shawshank.jpg";
import godfather from "/images/movies/godfather.jpg";
import darkKnight from "/images/movies/dark-knight.jpg";
import darylDixon from "/images/movies/daryl-dixon.jpg";
import arcane from "/images/movies/arcane.jpg";
import zootopia2 from "/images/movies/zootopia2.jpg";
import blackBird from "/images/movies/black-bird.jpg";
import ballerina from "/images/movies/ballerina.jpg";
import breakingBad from "/images/movies/breaking-bad.jpg";
import knockKnock from "/images/movies/knock-knock.jpg";

export const moviesResponse = {
  page: 1,
  results: [
    {
      id: 1,
      title: "The Shawshank Redemption",
      release_date: "1994-09-23",
      vote_average: 9.3,
      poster_path: shawshank,
      overview:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      id: 2,
      title: "The Godfather",
      release_date: "1972-03-24",
      vote_average: 9.2,
      poster_path: godfather,
      overview:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      id: 3,
      title: "The Dark Knight",
      release_date: "2008-07-18",
      vote_average: 9.0,
      poster_path: darkKnight,
      overview:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham.",
    },
    {
      id: 4,
      title: "Daryl Dixon",
      release_date: "",
      vote_average: "",
      poster_path: darylDixon,
      overview: "",
    },
    {
      id: 5,
      title: "Arcane",
      release_date: "",
      vote_average: "",
      poster_path: arcane,
      overview: "",
    },
    {
      id: 6,
      title: "Zootopia 2",
      release_date: "",
      vote_average: "",
      poster_path: zootopia2,
      overview: "",
    },
    {
      id: 7,
      title: "Black Bird",
      release_date: "",
      vote_average: "",
      poster_path: blackBird,
      overview: "",
    },
    {
      id: 8,
      title: "Ballerina",
      release_date: "",
      vote_average: "",
      poster_path: ballerina,
      overview: "",
    },
    {
      id: 9,
      title: "Breaking Bad",
      release_date: "",
      vote_average: "",
      poster_path: breakingBad,
      overview: "",
    },
    {
      id: 10,
      title: "knock-knock",
      release_date: "",
      vote_average: "",
      poster_path: knockKnock,
      overview: "",
    },
  ],
};
