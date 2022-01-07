export default function Movies({ movies, style }) {
  return (
    <main className={style.componentContent}>
      {movies.map(({ attributes }, index) => {
        let { movie_title, release_date, runtime, movie_rating, genres } =
          attributes;

        return (
          <section className={style.movieContent} key={index}>
            <div className={style.movieInfo}>
              <p>{movie_title}</p>
              <p>Runtime: {runtime} min</p>
              <p>Release: {release_date}</p>
              <p>Rating: {movie_rating}</p>
            </div>
            <div className={style.contentType}>
              <i className="fas fa-film"></i>
              <div className={style.contentTypeCutout} />
            </div>
            <div className={style.genreLabel}>
              {genres.data.map(({ attributes }, index) => {
                console.log("attributes", attributes);
                let { genre } = attributes;

                return <p key={index}>{genre}</p>;
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
