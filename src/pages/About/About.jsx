import React from "react";

function About() {
  return (
    <div>
      {/* Hero Header */}
      <div className="relative flex h-60 w-full items-center justify-center md:h-96">
        <h1 className="text-3xl font-bold md:text-5xl">About This Project</h1>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl space-y-10 px-6 py-12 md:px-16">
        {/* Intro */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-red-600">Netflix Clone</h2>
          <p className="leading-relaxed text-gray-300">
            This project is a React & Tailwind clone of Netflix. It demonstrates
            fetching data from TMDB API, displaying movies in carousels,
            creating movie detail pages, and providing a Netflix-style UI/UX.
            The project is fully responsive and includes interactive features
            like Watchlist, Like, and more.
          </p>
        </section>

        {/* Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-red-600">Features</h2>
          <ul className="list-inside list-disc space-y-2 text-gray-300">
            <li>
              Fetch latest movies, popular movies, series, and animations from
              TMDB API
            </li>
            <li>Interactive movie cards with hover effect</li>
            <li>
              Movie details page with poster, backdrop, overview, genres, and
              ratings
            </li>
            <li>Watchlist and Like buttons</li>
            <li>Responsive single-row carousels using Swiper</li>
            <li>Lightweight and modern Tailwind CSS styling</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-red-600">Tech Stack</h2>
          <p className="text-gray-300">
            React, React Router, Axios, Tailwind CSS, Swiper, TMDB API
          </p>
        </section>

        {/* Footer Note */}
        <section>
          <p className="text-sm text-gray-500">
            This is a demo project for learning and portfolio purposes. All
            movie data is fetched from TMDB API.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
