import {useState, useEffect} from 'react';
import Character from './Character';


function Search({}){
    const [allCharacters, setAllCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then ((data) => {
                setAllCharacters(data.results);
                setFilteredCharacters(data.results);
        })
        .catch((error) => console.error("Error fetching data:", error));
      }, []);

     useEffect(() => {
        const filterBySearch = query === "" ? allCharacters : allCharacters.filter((item) => 
        item.name.toLowerCase().includes(query.toLowerCase()) || item.id.toString() === query
    );

        setFilteredCharacters(filterBySearch);
     },[query, allCharacters]);
    

    const handleDelete = (id) => {
        const updatedCharacters = filteredCharacters.filter(character => character.id !== id);
        setFilteredCharacters(updatedCharacters);
        setAllCharacters(updatedCharacters);
    }

    return(
        <div>
            <form className='flex items-center justify-center mt-6'>
            <input  type='text' id='search-form' onChange={(e) => setQuery(e.target.value)} placeholder='Search Character'
                className="border border-gray-300 rounded-md p-2 mb-4 w-full text-black font-semibold text-l"/>
                <div className='pb-5'>
                <button className='flex itms-center border-2 border-solid rounded-full bg-orange-100 pl-5 pr-6 p-2 text-black font-semibold text-l' type='submit'>search </button>
                </div>
                </form>

            <div className="flex flex-wrap justify-between">
                {filteredCharacters.map((character) => (
                    <Character
                        key={character.id}
                        character={character}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );

}
export default Search;