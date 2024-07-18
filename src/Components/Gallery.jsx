import { useEffect, useState } from 'react'
import Character from './Character';
import Search from './Search';



function Gallery () {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then ((data) => {
      setCharacters(data.results);
    })
    .catch((error) => console.error("Error fetching data:", error));
  }, []);


  function handleDelete(id) {
    const newCharacters = characters.filter((character) => character.id !== id);
  
  setCharacters(newCharacters);

  }
  
  return (
    <>
    <div>
      {characters.map((character) => (
        <Character key={character.id} character={character} handleDelete={handleDelete} />
      ))}
      
    </div>
    
    </>
    
  );
}
export default Gallery;