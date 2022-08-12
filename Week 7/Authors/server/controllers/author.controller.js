const Author = require('../models/author.model');
const authorRoutes = require('../routes/author.routes');

module.exports = {
    findAllAuthors: (req, res) => {
        Author.find()
            .then((allAuthors) => {
                console.log(allAuthors);
                res.json(allAuthors)
            })
            .catch((err) => {
                console.log("Find all Authors failed!");
                res.json({message: "Something went wrong with findAllAuthors!", error: err})
            })
    },

    createNewAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => {
                console.log(newAuthor);
                res.json(newAuthor);
            })
            .catch((err) => {
                console.log("Something went wrong in createNewAuthor!");
                res.status(400).json(err);
            })
    },

    findOneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then((oneAuthor) => {
                console.log(oneAuthor);
                res.json(oneAuthor);
            })
            .catch((err) => {
                console.log("Find one author failed!");
                res.json({message: "Something went wrong with findOneAuthor!"})
            })
    },

    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then((deletedAuthor) => {
                console.log(deletedAuthor);
                res.json(deletedAuthor);
            })
            .catch((err) => {
                console.log("Delete author failed!");
                res.json({message: "Something went wrong with deleteAuthor!", error: err})
            })
    },

    updateAuthor: (req, res) =>{
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
            .then((updatedAuthor) => {
                console.log(updatedAuthor);
                res.json(updatedAuthor);
            })
            .catch((err) => {
                console.log("Something went wrong with updateAuthor!");
                res.status(400).json(err);
            })
    }
}
