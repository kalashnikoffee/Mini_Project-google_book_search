import React, { Component } from 'react';
import API from "../utils/API";
import Card from "../components/Card";
// import Form from "../components/Form";

class Saved extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    API.getBooks()
      .then(books => {
        if (books.data.length > 0 ) {
          this.setState({
            books: books.data
          })
        } else {
          this.setState({books: []})
        }
      })
  }

  deleteBook = id => {
    API.deleteBook(id).then(() => this.getBooks())
  }

  render() {
    return (
      <div>
        <div className="bg-search p-3">
        <div className="m-0 p-0"><strong>Saved Books:</strong></div>
          {this.state.books.map((book, index) => {
            return (
              <Card
                name={book.title}
                title={book.title}
                author={book.author}
                description={book.description}
                link={book.link}
                id={book._id}
                image={book.image}
                key={book._id}
                view="saved"
                bookDelete={() => this.deleteBook(book._id)}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Saved