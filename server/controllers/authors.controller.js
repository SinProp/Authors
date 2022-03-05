const Author = require("../models/author.model");

const addAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch((err) => res.status(400).json({err}));
    };
const getAllAuthors = (req, res) => {
    Author.find()
    .then((allAuthors) => res.json(allAuthors))
    .catch((err) => res.status(400).json({err}));
};

const getAuthorById = (req, res) => {
    Author.findOne({ _id: req.params._id })
    .then((targetAuthor) => res.json(targetAuthor))
    .catch((err) => res.status(400).json({err}));
};

const deleteAuthor= (req, res) => {
    Author.deleteOne({ _id: req.params._id })
    .then((erasedAuthor) => res.json(erasedAuthor))
    .catch((err) => res.status(400).json({err}));
};

const updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params._id}, 
        req.body, 
        {
        new: true,
        runValidators: true,
        })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch((err) => res.status(400).json({err}));
    };


module.exports = {
    addAuthor,
    getAllAuthors,
    getAuthorById,
    deleteAuthor,
    updateAuthor,
}