import { useSelector } from "react-redux";
import MusicCard from "../../components/Card/Card";
import React from "react";

export default function FavoritesPage() {
  const favList = useSelector((store) => store.favList.favList);

  return (
    <>
      <div className="container row row-cols-3 gap-2">
        {favList.map((song, index) => (
          <React.Fragment key={index}>
            <MusicCard {...song} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
