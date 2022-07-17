import BookDB from "./BookDB.js";
import fileService from "./fileService.js";


class BookDBService {
    async create(book, pdf) {
        const fileName = fileService.saveFile(pdf);
        const createdBook = await BookDB.create({...book, pdf: fileName});
        return createdBook;
    }

    async getAll() {
        const books = await BookDB.find();
        return books;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('ID not stated')
        }
        const book = await BookDB.findById(id);
        return book;
    }

    async update(book) {
        if (!book._id) {
            throw new Error('ID not stated')
        }
        const updatedBook = await BookDB.findByIdAndUpdate(book._id, book, {new: true})
        return updatedBook;
    }

    async delete(id) {
        if (!id) {
            throw new Error('ID not stated')
        }
        const book = await BookDB.findByIdAndDelete(id);
        return book;
    }
}


export default new BookDBService();