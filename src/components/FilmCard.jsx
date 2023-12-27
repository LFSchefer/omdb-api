import * as React from "react"
import "./FilmCard.css"

export default function FilmCard(props) {

  return(
    <>
    <div className="film-card">
      <img src={props.film.Poster} alt="" />
      <div className="info-card">
        <h4 className="more" onClick={() => props.handleClick(props.film.imdbID)}>{props.film.Title}</h4>
        <p>Type:   {props.film.Type}</p>
        <p>Year:   {props.film.Year}</p>
        <p className="more" onClick={() => props.handleClick(props.film.imdbID)}>more infos</p>
      </div>
    </div>
    </>
  );
};
