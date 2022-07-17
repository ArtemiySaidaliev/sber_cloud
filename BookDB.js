import mongoose from "mongoose";

//parameters of database
const Book = new mongoose.Schema({
    name: {type: String, require: true},
    author: {type: String, require:true},
    publishing_year: {type: String, require: true},
    ganre: {type: String, require:true},
    page_count: {type: String, require:true},
    publisher: {type: String, require:true},
    pdf: {type: String, require: false}
})


export default mongoose.model('Book', Book)