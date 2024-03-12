import mongoose from 'mongoose';

const Student = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    class: {type: String, required: true},
    group: {type: String, required: true}
})

export default mongoose.model('Student', Student)