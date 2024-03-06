import HomeworkService from "../services/homeworkService.js";

class HomeworkController {
    async create(req, res) {
        try {
            const homework = await HomeworkService.create(req.body)
            res.json(homework)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const homeworks = await HomeworkService.getAll();
            return res.json(homeworks);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const homework = await HomeworkService.getOne(req.params.id)
            return res.json(homework)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAllByStudentId(req, res) {
        try {
            const homeworks = await HomeworkService.getAllByStudentId(req.params.id)
            return res.json(homeworks)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {udentService.update(req.body);
            return res.json(updatedHomework);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const homework = await HomeworkService.create(req.params.id);
            return res.json(homework)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new HomeworkController();