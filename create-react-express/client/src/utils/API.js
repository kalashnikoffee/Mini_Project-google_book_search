import axios from "axios";

export default {
    // Gets all books
    getPosts: function() {
      return axios.get("/api/books");
    },
    // Gets the books with the given id
    getPost: function(id) {
      return axios.get("/api/books/" + id);
    },
    // Deletes the books with the given id
    deletePost: function(id) {
      return axios.delete("/api/books/" + id);
    },
    // Saves a post to the book database
    savePost: function(bookData) {
      return axios.post("/api/books", bookData);
    },
    //  View Saved books 
    getPost: function(bookData) {
     return axios.post("/api/books/", bookData);
    },     
  };


  // export default {
//     getBooks: function(query) {
//         return axios.get("/api/books", { params: {q: query} });
//     }
// };
