import MusicCard from "../Card/Card";
import music_list from "../../data/music_data"
import React, { useState, useMemo, useCallback } from "react";

export default function AlbumSection () {
    const [songs, setSongs] = useState(music_list)

    console.log(songs)

    const deleteSong = (id) => {
        const new_songs = songs.filter(song => song.id !== id)
        setSongs(new_songs)
    }

    return <>
        <div className="container mx-auto row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5 gap-3 ">
            {songs.map((song, index) => {
                return <React.Fragment key={song.id}>
                    <MusicCard {...song} deleteSongFromState={deleteSong}/>
                </React.Fragment>
            })}
        </div>
    </>
}