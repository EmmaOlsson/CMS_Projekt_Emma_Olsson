import { useState } from "react";

import Movies from "../components/Movies";
import Books from "../components/Books";
import Genres from "../components/Genres";

import style from "../css/landing.module.css";

function Landing() {
  const [toggleBooks, setToggleBooks] = useState(false);
  const [toggleMovies, setToggleMovies] = useState(false);
  const [toggleBooksMovies, setToggleBooksMovies] = useState(false);
  const [toggleGenre, setToggleGenre] = useState(false);

  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchBooks = async () => {
    let resp = await fetch("http://localhost:1337/api/books?populate=*");
    let json = await resp.json();
    setBooks(json.data);
  };

  const fetchMovies = async () => {
    let resp = await fetch("http://localhost:1337/api/movies?populate=*");
    let json = await resp.json();
    setMovies(json.data);
  };

  const fetchGenres = async () => {
    let resp = await fetch(`http://localhost:1337/api/genres?populate=*`);
    let json = await resp.json();
    setGenres(json.data);
  };

  const handleBooks = () => {
    fetchBooks();
    setToggleBooks(!toggleBooks);
    setToggleMovies(false);
    setToggleBooksMovies(false);
    setToggleGenre(false);
  };

  const handleMovies = () => {
    fetchMovies();
    setToggleMovies(!toggleMovies);
    setToggleBooks(false);
    setToggleBooksMovies(false);
    setToggleGenre(false);
  };

  const handleBooksMovies = () => {
    fetchBooks();
    fetchMovies();
    setToggleBooksMovies(!toggleBooksMovies);
    setToggleBooks(false);
    setToggleMovies(false);
    setToggleGenre(false);
  };

  const handleGenres = () => {
    fetchGenres();
    setToggleGenre(!toggleGenre);
    setToggleBooks(false);
    setToggleMovies(false);
    setToggleBooksMovies(false);
  };


  return (
    <main className={style.mainContainer}>
        <h1>Choose a library to explore</h1>
        <div className={style.buttonContainer}>
          <button
            onClick={handleBooks}
            className={
              toggleBooks ? `${style.activeButton}` : `${style.inactiveButton}`
            }
          >
            {!toggleBooks ? "Books" : "Hide Books"}
          </button>

          <button
            onClick={handleMovies}
            className={
              toggleMovies ? `${style.activeButton}` : `${style.inactiveButton}`
            }
          >
            {!toggleMovies ? "Movies" : "Hide Movies"}
          </button>

          <button
            onClick={handleBooksMovies}
            className={
              toggleBooksMovies
                ? `${style.activeButton}`
                : `${style.inactiveButton}`
            }
          >
            {!toggleBooksMovies ? "Movies & Books" : "Hide Movies"}
          </button>
          <button
            onClick={handleGenres}
            className={
              toggleGenre ? `${style.activeButton}` : `${style.inactiveButton}`
            }
          >
            {!toggleGenre ? "Sort by genres" : "Hide genres"}
          </button>
        </div>
        <>
          {toggleBooks ? <Books books={books} style={style} /> : ""}

          {toggleMovies ? <Movies movies={movies} style={style} /> : ""}
          {toggleBooksMovies ? (
            <>
              <Books books={books} genres={genres} style={style} />
              <Movies movies={movies} genres={genres} style={style} />
            </>
          ) : (
            ""
          )}
          {toggleGenre ? <Genres genres={genres} style={style} /> : ""}
        </>
    </main>
  );
}

export default Landing;
