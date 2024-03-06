import mongoose from 'mongoose';

const Homework = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    dueDate: {type: Date, required: true},
    studentId: {type: String, required: true}
})

export default mongoose.model('Homework', Homework)