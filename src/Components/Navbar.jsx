import  react  from 'react';
import { Link } from "react-router-dom";

function Navbar () {
    return (
        <div>

         <h1 className='text-center font-sans text-3xl text-black font-semibold py-10 uppercase underline'>Rick And Morty Characters</h1>

        <nav className='font-semibold'>
            <ul className='flex justify-end px-20 py-6 bg-gray-500 text-2xl '>
                <div className='uppercase '>

                    <Link to='/searchList'className='hover:bg-gray-900 text-white float-right cursor-pointer font-semibold py-2 px-3'>SearchList</Link>
                    <Link to='/gallery'className='hover:bg-gray-900 text-white float-right cursor-pointer font-semibold py-2 px-3'>Gallery</Link>
                    <Link to='/'className='hover:bg-gray-900 text-white float-right cursor-pointer font-semibold py-2 px-3'>Home</Link>
                    
                </div>
            </ul>
        </nav>
        </div>
    )
}
export default Navbar;