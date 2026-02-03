const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchFromTMDB(endpoint) {
  const res = await fetch(
    `${BASE_URL}${endpoint}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
  );
  if (!res.ok) {
    throw new Error("TMDB request failed");
  }

  return res.json();
}
