const API_KEY = 'b9bc082380fe3d20480c2cc3db25b48b';


const requests = {
    fetchTrending:`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchSeries:`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchAiringSeries:`/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
    fetchBanner:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate`

}

export default requests;