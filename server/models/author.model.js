const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    
    authorName: {
        type: String,
        required:[true, "This author needs a name!"],
        minlength: [3, "This author's name should be at least 3 characters long"],
    }
});


const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;


