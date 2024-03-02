import { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBar value={search} onSearch={setSearch}/>
    </>
  )
}

export default App
