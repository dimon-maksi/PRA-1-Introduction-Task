import Student from "../models/student.js";

class StudentService {
    async create(student) {
        const createdStudent = await Student.create(student);
        return createdStudent;
    }

    async getAll() {
        const students = await Student.find();
        return students;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('ID is not specified')
        }
        const student = await Student.findById(id);
        return student;
    }

    async update(student) {
        if (!student._id) {
            throw new Error('ID is not specified')
        }
        const updatedStudent = await Student.findByIdAndUpdate(student._id, student, {new: true})
        return updatedStudent;
    }

    async delete(id) {
            if (!id) {
                throw new Error('ID is not specified')
            }
            const student = await Student.findByIdAndDelete(id);
            return student;
    }
}


export default new StudentService();