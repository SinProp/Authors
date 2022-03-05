import { Link, navigate } from "@reach/router";
import axios from "axios";
import { useState, useEffect} from "react";
import "../App.css";


const AuthorList = () => {
    const [authors, setAuthors] = useState([]);


    useEffect(() => {
        axios
        .get("http://localhost:8000/api/authors")
        .then((response) => {
            console.log(response.data);
            setAuthors(response.data);
        })
        .catch(err => console.log(err));
    }, []);

const deleteFilter = (idFromBelow) => {
    axios
    .delete(`http://localhost:8000/api/authors/${idFromBelow}`)
    .then(response => {
        console.log(response.data);
        setAuthors(authors.filter((author, index) => author._id !== idFromBelow));
    })
    .catch(err => console.log(err));
}

const deleteHandler = () => {
    axios.delete(`http://localhost:8000/api/authors/${_id}`)
    .then(response => {
        console.log(response.data);
        navigate("/");
    })
    .catch(err => console.log(err));
}


    return (
    <div className="container text-center">
        

        <h1 >Favorite Authors </h1> 
        <h3>We have quotes by:</h3>
        <hr />
        <h2 className="text-center"><Link to="/new-Author">Add a Author to the shelter
        </Link>
        </h2>        

        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Author</th>
                    <th scope="col">Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {authors.map((author) => {
                    return (
                    <tr key={author._id}>
                                <td>{author.authorName}</td>
                                <td>{author.authorType}</td>
                                <td><button className="btn btn-danger" onClick={deleteHandler}>Delete {author.authorName}</button>
                                <button className="button-margin" onClick={()=>navigate(`/edit/${author._id}`)}>Edit</button>
                                </td>
                                
                            </tr>
                            );
                    })}
            </tbody>
        </table>
        
            

        </div>
    );

}

export default AuthorList;