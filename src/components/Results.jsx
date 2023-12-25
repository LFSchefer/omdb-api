import * as React from "react";
import "./Results.css";
import FilmCard from "./FilmCard";


export default function Results(props) {

  const [apiResult, setApiResult] = React.useState({responseData:null,ready:false})

  const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${props.searchText}`;


  React.useEffect(() => {
    async function fetchApi() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(apiResult.responseData)
      if (data.Response === 'False') {
        setApiResult({ready:false})
      }
      else {
        setApiResult({responseData:data.Search,ready:true});
      }
    }
    fetchApi()
  },[apiResult.responseData, props.searchText, url])

const films = apiResult.ready ? apiResult.responseData.map((film, i) => {
  return <FilmCard
  film={film}
  key={i}/>
}) : "";

  return(
    <>
    <h3>Results:</h3>
    {films}
    </>
  );
};
