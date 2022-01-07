import style from "../css/Genre.module.css";

import { useState } from "react";

export default function Genres({ genres }) {
  const [toggleGenre, setToggleGenre] = useState(null);

  return (
    <main className={style.genreComponent}>
      <div className={style.genreContainer}>
        {genres.map(({ attributes }, index) => {
          let { genre, movies, books } = attributes;
          console.log();

          return (
            <div className={style.genreSelection} key={index}>
              <section
                className={
                  toggleGenre === genre
                    ? `${style.genreShow}`
                    : `${style.genreHide} `
                }
              >
                <div className={style.buttonContainer}>
                  <button
                    className={
                      toggleGenre === genre
                        ? `${style.activeButton}`
                        : `${style.inactiveButton}`
                    }
                    onClick={() =>
                      toggleGenre === genre
                        ? setToggleGenre(null)
                        : setToggleGenre(genre)
                    }
                  >
                   {genre}
                  </button>
                </div>
                {toggleGenre === genre ? (
                  <div className={style.genreContext}>
                    {movies.data.map(({ attributes }, index) => {
                      let { movie_title, release_date, runtime, movie_rating } =
                        attributes;
                      return (
                        <section className={style.genreContent} key={index}>
                          <div className={style.movieInfo}>
                            <p>{movie_title}</p>
                            <p>Runtime: {runtime} min</p>
                            <p>Release: {release_date}</p>
                            <p>Rating: {movie_rating}</p>
                          </div>
                          <div className={style.contentType}>
                            <i className="fas fa-film"></i>
                            <div className={style.contentTypeCutout}/>
                          </div>
                        </section>
                      );
                    })}

                    {books.data.map(({ attributes }, index) => {
                      let { book_title, author, pages, book_rating } =
                        attributes;
                      return (
                        <section className={style.genreContent} key={index}>
                          <div className={style.movieInfo}>
                            <p>{book_title}</p>
                            <p>{author}</p>
                            <p>Pages: {pages}</p>
                            <p>Rating: {book_rating}</p>
                          </div>
                          <div className={style.contentType}>
                            <i className="fas fa-book"></i>
                            <div className={style.contentTypeCutout}/>
                          </div>
                        </section>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </section>
            </div>
          );
        })}
      </div>
    </main>
  );
}
