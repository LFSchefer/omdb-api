import * as React from "react";
import "./Results.css";
import FilmCard from "./FilmCard";

export default function Results(props) {

  const [apiResult, setApiResult] = React.useState({responseData:null,ready:false})

  const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=batman`;

  React.useEffect(() => {
    fetchApi()
  },[])

  async function fetchApi() {
    const response = await fetch(url);
    const data = await response.json();
    setApiResult({responseData:data.Search,ready:true});
  }

const films = apiResult.ready ? apiResult.responseData.map((film, i) => {
  return <FilmCard
  film={film}
  key={i}/>
}) : "";

// console.log(films)

  return(
    <>
    <h3>Results:</h3>
    {films}
    </>
  );
};
