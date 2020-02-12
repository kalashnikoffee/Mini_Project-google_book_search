import react, { useEffect } from "react";
import API from "../utils/API";

function Saved() {
    const [state, dispatch] = useStoreContext();

    const removeBook = id => {
        API.deleteBook(id)
            .then(() => {
                dispatch({
                    type: REMOVE_POST,
                    _id: id
                });
            })
            .catch(err => console.log(err));
    };

    const getBooks = () => {
        dispatch({ type: LOADING });
        API.getBooks()
            .then(results => {
                dispatch({
                    type: UPDATE_POSTS,
                    posts: results.data
                });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div>
            <h4>Saved Books</h4>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="{post.image}" class="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <h3>{post.author}</h3>
                        <p className="card-text">{post.description}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <button onClick={() => viewBook(book._id)} />
                    <button onClick={() => removeBook(book._id)} />
                </div>
            </div>
        </div>

    )
}

export default Saved;