import { useParams, useSearchParams } from "react-router-dom";
import music_list from "../../data/music_data";
import { useEffect, useState } from "react";
import MusicCard from "../../components/Card/Card";

export default function Songpage() {
  const { id } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const [song, setSong] = useState({});

  useEffect(() => {
    const current_song = music_list.filter((_song) => _song.id == id)[0];
    setSong(current_song);
  }, []);

  return (
    <>
      <h1 className="mt-3">Song number: {id}</h1>

      {song ? (
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-4">
              <img src={song.artwork} class="img-fluid" alt="Song Cover" />
            </div>
            <div class="col-md-8">
              <h2>{song.title}</h2>
              <h4>{song.artist}</h4>
              <p>Album: Album Name</p>
              <p>Released: Release Date</p>
              <audio controls class="w-100">
                <source src={song.url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p class="mt-3">
                Song description or lyrics can go here. This section can provide
                more details about the song, its background, and any interesting
                facts.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Song with this id was not found</p>
      )}
    </>
  );
}
