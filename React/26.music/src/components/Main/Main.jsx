import "./Main.css";
import { useState, useEffect } from "react";

const Main = ({ bandName, setBandName }) => {
  const [artist, setArtist] = useState(undefined);
  const [artistImage, setArtistImage] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [showMoreBio, setShowMoreBio] = useState(false);

  const getArtist = async () => {
    setLoaded(false);
    const data = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${bandName}&api_key=a437dc3b214b543816ab39af1f8e5ab2&format=json`
    );

    const dataJSON = await data.json();
    const imageData = await fetch(
      `https://serpapi.com/search.json?q=${bandName}%20band&engine=google_images&ijn=0&api_key=f41a795f5257f4a812a2e1fc819feb625ec8b0fb8da9042b1268e13b4effb03a`
    );
    const dataImageJSON = await imageData.json();
    setArtist(dataJSON.artist);
    setArtistImage(dataImageJSON.images_results[0].original);
    setLoaded(true);
  };

  useEffect(() => {
    getArtist();
  }, [bandName]);

  return (
    <main>
      {!loaded ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>{artist.name}</h2>
          {artist.ontour === "1" && <span>On Tour</span>}
          <img src={artistImage} alt={artist.name} />
          <section className="similar">
            <h3>Similar artists:</h3>
            {artist.similar.artist.map((sim) => (
              <button key={sim.name} onClick={() => setBandName(sim.name)}>
                {sim.name}
              </button>
            ))}
          </section>
          <section className="tags">
            {artist.tags.tag.map((item) => (
              <h4 key={item.name}>
                #{item.name.replaceAll(" ", "_").toLowerCase()}
              </h4>
            ))}
          </section>
          <section className="bio">
            <p>{!showMoreBio ? artist.bio.summary : artist.bio.content}</p>
          </section>
          <button onClick={() => setShowMoreBio(!showMoreBio)}>
            {!showMoreBio ? "Show more" : "Show less"}
          </button>
        </div>
      )}
    </main>
  );
};

export default Main;
