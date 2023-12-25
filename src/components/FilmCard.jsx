import * as React from "react"
import "./FilmCard.css"

export default function FilmCard(props) {

  return(
    <>
    <div className="film-card">
      <img src={props.film.Poster} alt="" />
      <h4 className="more" onClick={() => props.handleClick(props.film.imdbID)}>{props.film.Title}</h4>
      <div className="type-year">
      <p>{props.film.Type}</p>
      <p>{props.film.Year}</p>
      </div>
      <p className="more" onClick={() => props.handleClick(props.film.imdbID)}>more infos</p>
    </div>
    </>
  );
};
