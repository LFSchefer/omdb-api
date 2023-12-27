import * as React from "react";
import "./FilmDetail.css";

export default function FilmDetail(props) {

  return (
    <>
    <div className="film-details">
      <div className="details">
      <img src={props.film.Poster} alt="" />
        <div className="infos-details">
          <p>Title: {props.film.Title}</p>
          <p>Release: {props.film.Released}</p>
          <p>Genre: {props.film.Genre}</p>
          <p>Director: {props.film.Director}</p>
          <p>Actors: {props.film.Actors}</p>
          <p>Country: {props.film.Country}</p>
          <p>Awards: {props.film.Awards}</p>
          <p>imdbRating: {props.film.imdbRating}</p>
          <p>BoxOffice: {props.film.BoxOffice}</p>
        </div>
      </div>
      <p>Plot: {props.film.Plot}</p>
      <a href={`https://www.imdb.com/title/${props.film.imdbID}/`} target="blank">Visite Imdb page</a>
    </div>
    </>
  )
}
