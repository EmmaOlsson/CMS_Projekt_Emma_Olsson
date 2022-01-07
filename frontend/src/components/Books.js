
export default function Books({ books, style }) {
  return (
    <main className={style.componentContent}>
      {books.map(({ attributes }, index) => {
        let { book_title, author, pages, book_rating, cover_image, label, genres} = attributes;

        let { url } = cover_image.data.attributes;

        return (
          <section className={style.bookContent} key={index}>
            <div className={style.coverContainer}>
              <img
                src={`http://localhost:1337${url}`}
                alt="movie_cover"
                className={style.coverImg}
              />
                                                      <div className={style.labelContent}>
                            <p>{label}</p>
                          </div>
            </div>
            <div className={style.bookInfo}>
              <p>{book_title}</p>
              <p>{author}</p>
              <p>Pages: {pages}</p>
              <p>Rating: {book_rating}</p>
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
