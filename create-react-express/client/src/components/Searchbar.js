import React from "react";
import API from "./utils/API"

function Search(){

    const handleInputChange = event =>{
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    };

    const handleSubmit = event =>{
        API.getBooks(this.state.bookSearch)
        .then(res => this.setState({ books: res.data.hits }))
        .catch(err => console.log(err))
    };



    return(
        <div>
            <div class="container">
                <h5>Book Search</h5>
                <input placeholder="Search a book"></input>
                <button>Search</button>
            </div>
        </div>
    )
}

export default Search;