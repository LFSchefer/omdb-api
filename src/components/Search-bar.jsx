import * as React from "react";
import "./search-bar.css";
import Results from "./Results";

export default function Search(props) {

  const [formInput, setFormInput] = React.useState({searchText:"batman"})

  const handleChange = (event) => {
    setFormInput((prev) => {
      return { ...prev,
        searchText: event
      }
    })
  };

  const searchForm = <form action="">
    <input type="text" name="search" onChange={(event) => handleChange(event.target.value)} value={formInput.searchText}/>
  </form>

  return(
    <>
    <h1>Search</h1>
    {searchForm}
    < Results
    searchText={formInput.searchText}
    />
    </>
  );
};
