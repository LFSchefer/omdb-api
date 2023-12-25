import * as React from "react";
import "./Results.css";
import FilmCard from "./FilmCard";
import FilmDetail from "./FilmDetail";

export default function Results(props) {

  const [ready, setReady] = React.useState(true)
  const [apiResult, setApiResult] = React.useState({responseData:[], ready: true})
  const [pageNumb, setPageNumb] = React.useState(1)
  const [details, setDetails] = React.useState({displayDetails: false, filmId: '', data:{}})

  const title = props.searchText !== '' ? `&s=${props.searchText}` : '&s=Batman';
  const year = props.year !=='' ? `&y=${props.year}` :'';
  const type = `&type=${props.type}`;
  const page = `&page=${pageNumb}`;

  const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}${title}${year}${type}${page}`;

  React.useEffect(() => {
    async function fetchApi() {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'False') {
        setReady(false);
      }
      else {
        setApiResult({responseData:data.Search});
        setReady(true);
        setDetails(prev => {
          return {...prev, displayDetails: false}
        })
      }
    };
    fetchApi()
  },[url, ready]);

  React.useEffect(()=> {
    setPageNumb(1)
  },[title,year,type])

  const incrementPage = () => {
    setPageNumb(prev => prev + 1);
  };

  const decrementPage = () => {
    if (pageNumb>1) {
      setPageNumb(prev => prev -1);
    };
  };

  const showDetail = data => {
    setDetails(prev => {
      return {...prev,
        displayDetails:true,
        filmId: data};
    });
    async function fetchDetails(url) {
      const response = await fetch(url);
      const data = await response.json();
      setDetails(prev => {
        return {...prev, data: data}
      });
    };
    const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${data}`;
    fetchDetails(url);
  };

  const backToSearch = () => {
    setDetails(prev => {
      return {...prev, displayDetails: false}
    })
  };

  const films = apiResult.responseData.map((film, i) => {
    return <FilmCard
    film={film}
    key={i}
    handleClick={showDetail}/>
  })

  const textResult = ready ? <h3>Results:</h3> : <div><h3>No match</h3><hr /><h5>Your previous résutls</h5></div>;

  const btnPages = <div className="btn-container">
    <div className="btn" onClick={decrementPage}>Previous page</div>
    <p>Pages: {pageNumb}</p>
    <div className="btn" onClick={incrementPage}>Next page</div>
  </div>

const display = details.displayDetails ?
<>
<div className="btn back-btn" onClick={backToSearch}>Back to results</div>
 <FilmDetail
 film={details.data}/>
</>
 :
<>{textResult}
{btnPages}
{films}</>;

  return(
    <>
      {display}
    </>
  );
};
