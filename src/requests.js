
const key = 'd603f8d2da405d422c0b6dd441888e5c'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=de&page=2`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=de&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=de&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=de&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=de&page=1`,
  };

  export default requests
