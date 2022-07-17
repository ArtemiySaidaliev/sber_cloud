import mongoose from "mongoose";

const Author = new mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require:true},
    year_of_born: {type: String, require: true},
    year_of_death: {type: String, require:false}
})

export default mongoose.model('Author', Author)