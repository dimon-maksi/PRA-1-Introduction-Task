import StudentService from "../services/studentService.js";

class StudentController {
    async create(req, res) {
        try {
            const student = await StudentService.create(req.body)
            res.json(student)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const students = await StudentService.getAll();
            return res.json(students);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const student = await StudentService.getOne(req.params.id)
            return res.json(student)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {StudentService.update(req.body);
            return res.json(updatedStudent);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const student = await StudentService.create(req.params.id);
            return res.json(student)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new StudentController();