import React, { useState } from "react";
import API from "../utils/API"
// create-react-express/client/src/utils/API.js

function Search(){

    const [books, setBooks] = useState([]);
    const [bookSearch, setBookSearch] = useState("");

    const handleInputChange = event =>{
        const { value } = event.target
       setBookSearch(value);
    };

    const handleSubmit = event =>{
        event.preventDefault();
        API.getBooks(bookSearch)
        .then(res => {
            setBooks(res.data.hits)
        })
        .catch(err => console.log(err))
    };


    return(
        <div>
            <div class="Search">
                <h5>Book Search</h5>
                <input 
                name= "BookSearch"
                value={bookSearch}
                onChange={handleInputChange}
                placeholder="Search a book">
                </input>
                
                <button 
                onClick = {handleSubmit}
                type = "success"
                className = "input-lg"
                >Search</button>
            </div>

            <div className="Results">
                <h4>Results</h4>
                {books.map(data => {
                    return(
                        key = {data.recipe.id}
                        title = {data.book.title}
                    )
                    
                })}
            </div>
        </div>
    )
}

export default Search;