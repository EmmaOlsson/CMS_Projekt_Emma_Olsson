export default function Books({ books, style }) {
  return (
    <main className={style.componentContent}>
      {books.map(({ attributes }, index) => {
        let { book_title, author, pages, book_rating, genres } = attributes;

        return (
          <section className={style.bookContent} key={index}>
            <div className={style.bookInfo}>
              <p>{book_title}</p>
              <p>{author}</p>
              <p>Pages: {pages}</p>
              <p>Rating: {book_rating}</p>
            </div>
            <div className={style.contentType}>
              <i className="fas fa-book"></i>
              <div className={style.contentTypeCutout} />
            </div>
            <div className={style.genreLabel}>
              {genres.data.map(({ attributes }, index) => {
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
