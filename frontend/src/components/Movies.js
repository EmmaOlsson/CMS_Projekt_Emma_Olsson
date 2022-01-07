export default function Movies({ movies, style }) {
  return (
    <main className={style.componentContent}>
      {movies.map(({ attributes }, index) => {
        let {
          movie_title,
          release_date,
          runtime,
          movie_rating,
          cover_image,
          genres,
        } = attributes;

        let { url } = cover_image.data.attributes;

        console.log("filmer", movies);
        return (
          <section className={style.movieContent} key={index}>
            <div className={style.coverContainer}>
              <img
                src={`http://localhost:1337${url}`}
                alt="movie_cover"
                className={style.coverImg}
              />
            </div>
            <div className={style.movieInfo}>
              <p>{movie_title}</p>
              <p>Runtime: {runtime} min</p>
              <p>Release: {release_date}</p>
              <p>Rating: {movie_rating}</p>
            </div>
                <div className={style.genreLabel}>
            {genres.data.map(({ attributes }, index) => {
              console.log("attributes", attributes);
              let { genre } = attributes;

              return (
                  <p key={index}>{genre}</p>
              );
            })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
