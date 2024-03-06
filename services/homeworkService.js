import Homework from "../models/homework.js";

class HomeworkService {
    async create(homework) {
        const createdHomework = await Homework.create(homework);
        return createdHomework;
    }

    async getAll() {
        const homeworks = await Homework.find();
        return homeworks;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('ID is not specified')
        }
        const homework = await Homework.findById(id);
        return homework;
    }
    async getAllByStudentId(studentId) {
        if (!studentId) {
            throw new Error('ID is not specified')
        }
        const homeworks = await Homework.find({studentId: studentId});
        return homeworks;
    }

    async update(homework) {
        if (!homework._id) {
            throw new Error('ID is not specified')
        }
        const updatedHomework = await Homework.findByIdAndUpdate(homework._id, homework, {new: true})
        return updatedHomework;
    }

    async delete(id) {
            if (!id) {
                throw new Error('ID is not specified')
            }
            const homework = await Homework.findByIdAndDelete(id);
            return homework;
    }
}


export default new HomeworkService();