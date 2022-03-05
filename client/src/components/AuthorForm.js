import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import "../App.css";


const AuthorForm = () => {
    // const {submissionBoolean, setSubmissionBoolean} = props; // creates a prop that acts as our lifted state variable
    const [authorName, setAuthorName] = useState("");
    const [errors, setErrors] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/Authors", {
            authorName,
            
        })
        .then((response) => {
            console.log(response);
            console.log("POSTED BABYY");
            navigate("/");
            })
        .catch((err) => {
            console.log("ERROR FOUND")
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };

    return (
    
    // Form setup or front end formatting
    <div className="container text-center">
    <h1 className="">Favorite Authors</h1> 
    <h3>Add a new Author</h3>
    <hr />
    <h2 className=""><Link to="/">Back to Home
        </Link></h2>        

    
    <form className="border border-dark " onSubmit={handleSubmit}> 
        <div className="form-group text-center">Author Name:{" "} 
        <input 
        type="text" 
        className="form-control"
        onChange={(e) => setAuthorName(e.target.value)}
        value={authorName}
        />
        </div>
        {errors.authorName ? <p>{errors.authorName.message}</p> : null}

        <button className="btn btn-primary btn-lg" type="submit">Add Author</button>
    </form>
    </div>
    );

};

export default AuthorForm;