import axios from "axios";

const movieBaseUrl='https://api.themoviedb.org/3'
const api_key='5e51e5ec6f719e10fa10f1cdc92d9945'
axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTUxZTVlYzZmNzE5ZTEwZmExMGYxY2RjOTJkOTk0NSIsInN1YiI6IjY1ZTdmYTlmM2ZlMTYwMDE3YjVjZTcyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vxGXJBqvoVf-MovCONW4UXOg8MUGos97bLc6bo4WC_c`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=5e51e5ec6f719e10fa10f1cdc92d9945';

//https://api.themoviedb.org/3/trending/all/day?api_key=5e51e5ec6f719e10fa10f1cdc92d9945

const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key"+api_key);
const getMovieByGenreId=(id)=> axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    getTrendingVideos,
    getMovieByGenreId
}
