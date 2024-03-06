import Router from 'express'
import StudentController from "./controllers/studentController.js"
import HomeworkController from "./controllers/homeworkController.js"

const router = new Router();

router.get('/api/students', StudentController.getAll);
router.post('/api/students', StudentController.create);

router.get('/api/homeworks', HomeworkController.getAll);
router.get('/api/homeworks/student/:id', HomeworkController.getAllByStudentId);
router.post('/api/homeworks', HomeworkController.create);

export default router;