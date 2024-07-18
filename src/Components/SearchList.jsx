import react, { useState } from "react";
import Search from "./Search";

const SearchList = () => {
    const handleSearch =(query) => {

    }

    return(
        <div>
            <h1 className = 'text-center font-semibold underline mt-10 text-2xl'>Character Search</h1>
            <Search/>

        </div>
    )
}
export default SearchList;