
import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const [originalMovie,setOriginalMovie] =useState([]);
  const [trendingMovie,setTrendingMovie] =useState([]);
  const [topRatedMovie,setTopRatedMovie] =useState([]);

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213`)
    .then((res)=>res.json())
    .then((data)=>setOriginalMovie(data.results))
  },[])
  return (
    <div className="">
      <div class="featured">
        <h2>Title</h2>
        <div class="featured__buttons">
          <button class="button__play"><i class="fas fa-play"></i>Play</button>
          <button>My List</button>
        </div>
        <div class="featured__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique
          magna magna, vit...
        </div>
      </div>
      <div class="netflixOriginals">
        <div class="original__header">
          <h2>NETFLIX ORIGINALS</h2>
        </div>
        <div class="original__movies">
          {/* <!-- Orignal Movies List Here --> */}
          {
            originalMovie.map()
          }
        </div>
      </div>
      <div class="movies">
        <div class="movies__header">
          <h2>Wishlist</h2>
        </div>
        <div id="wishlist" class="movies__container"></div>
        <div class="movies__header">
          <h2>Trending Now</h2>
        </div>
        <div id="trending" class="movies__container">
          {/* <!-- Trending Movies List Here --> */}
        </div>
        <div class="movies__header">
          <h2>Top Rated</h2>
        </div>
        <div id="top_rated" class="movies__container">
          {/* <!-- Top Rated Movies List Here --> */}
        </div>
      </div>
      <div
      class="modal fade"
      id="trailerModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span class="movieNotFound">Trailer Not Found</span>
            <iframe
              id="movieTrailer"
              height="400"
              src=""
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="MovieTrailer"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
