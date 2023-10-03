const Gallery = ({ gifs }) => {
  return (
    <section className="gallery">
      {gifs.map((gif) => (
        <a key={gif.id} href={gif.url} target="_blank">
          <img src={gif.images.fixed_height.url} alt={gif.title} />
        </a>
      ))}
    </section>
  );
};

export default Gallery;
