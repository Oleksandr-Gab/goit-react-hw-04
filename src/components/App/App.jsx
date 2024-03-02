import { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'

function App() {
  const [search, setSearch] = useState("");
  // const handlerSubmit = () => {
  //   setSearch()
  // }

  return (
    <>
      <SearchBar value={search} onSearch={setSearch}/>
    </>
  )
}

export default App
