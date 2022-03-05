const AuthorController = require("../controllers/authors.controller");


module.exports = (app) => {
    app.post('/api/authors', AuthorController.addAuthor);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/authors/:_id', AuthorController.getAuthorById);
    app.delete('/api/authors/:_id', AuthorController.deleteAuthor);
    app.put('/api/authors/:_id', AuthorController.updateAuthor)
};