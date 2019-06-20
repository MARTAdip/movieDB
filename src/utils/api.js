const API_KEY = process.env.MOVIE_DB_KEY;
// https://api.themoviedb.org/3/movie/550?api_key=
// https://api.themoviedb.org/3/discover/movie?api_key=

export function getMovieDB (name) {
  return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
          if (data.message) {
              throw new Error(name)
          }

          return data
      })
}
