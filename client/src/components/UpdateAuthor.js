import axios from "axios";
import React, { useState, useEffect} from "react";
import { Link, navigate }from "@reach/router"

const UpdateAuthor = (props) => {
    const [authorName, setAuthorName] = useState("");
    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:8000/api/authors/${_id}`, {
            authorName,

        })
        .then((response) => {
            console.log(response);
            navigate("/");
            })
        .catch((err) => console.log(err));
    
};
    const { _id } = props;    

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/authors/${_id}`)
        .then(response => {
            console.log(response.data);
            setuthorName(response.data.authorName);
            setId(response.data._id);

        })
        .catch(err => console.log(err));
    }, []);

    console.log(_id);
    return (
    <div className="container text-center">
        <h1>Favorite Authors</h1>
        <h1>Edit this author </h1> 
        <hr/>
        <h2 className=""><Link to="/">Back to Home
        </Link></h2>        

        <form className="border border-dark" onSubmit={handleSubmit}> 
        <div className="form-group">Name:{" "} 
        <input type="text" 
        onChange={(e) => setAuthorName(e.target.value)}
        value={authorName}
        />
        </div>

        <button className="btn btn-success"type="submit" value="Update">Update</button>
    </form>

    </div>
    );
    };

export default UpdateAuthor;