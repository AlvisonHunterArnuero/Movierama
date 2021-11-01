import React, {createContext, useState} from 'react';
export const DataContext = createContext();

function DataProvider({children}) {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(true);
  const [page, setPage] = useState(1);
  const [chosenTitle, setChosenTitle]= useState("");
  const [input, setInput] = useState({
    movieTitle: "naruto"
});
  return(
    <DataContext.Provider value={{
      movies, setMovies,
      page, setPage,
      open, setOpen,
      input, setInput,
      chosenTitle, setChosenTitle
    }}>
      {children}
    </DataContext.Provider>
  )
}
export default DataProvider;