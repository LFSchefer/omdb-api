import * as React from "react";
import "./search-bar.css";
import Results from "./Results";

export default function Search(props) {

  const [formInput, setFormInput] = React.useState({searchText:"", year:'', type:'movie'})

  const inputTitle = (event) => {
    setFormInput((prev) => {
      return { ...prev,
        searchText: event
      }
    })
  };

  const inputYear = (event) => {
    setFormInput((prev) => {
      return { ...prev,
        year: event
      }
    })
  };

  const inputType = (event) => {
    setFormInput((prev) => {
      return {...prev,
      type: event}
    })
  };

  const searchForm =
  <form action="">
    <label htmlFor="">Title:</label>
    <input type="text" name="search" placeholder="Batman" onChange={(event) => inputTitle(event.target.value)} value={formInput.searchText}/>
    <label htmlFor="">Year:</label>
    <input type="text" name="year" placeholder="2014" onChange={(event) => inputYear(event.target.value)} value={formInput.year}/>
    <label htmlFor="">Type:</label>
    <select name="type" onChange={(event) => inputType(event.target.value)} value={formInput.type}>
      <option value="movie">movie</option>
      <option value="series">series</option>
      <option value="episode">episode</option>
    </select>
  </form>

  return(
    <>
    <h1>Search</h1>
    {searchForm}
    < Results
    searchText={formInput.searchText}
    year={formInput.year}
    type={formInput.type}
    />
    </>
  );
};
