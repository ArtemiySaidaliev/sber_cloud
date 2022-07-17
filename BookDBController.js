import BookDB from "./BookDB.js";
import BookDBService from "./BookDBService.js";

class BookDBController {
    async create(req, res) {
        try {
            const book = await BookDBService.create(req.body, req.files.picture)
            res.json(book)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const books = await BookDBService.getAll();
            return res.json(books);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const book = await BookDBService.getOne(req.params.id)
            return res.json(book)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedBook = await BookDBService.update(req.body);
            return res.json(updatedBook);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const book = await BookDBService.create(req.params.id);
            return res.json(book)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new BookDBController();