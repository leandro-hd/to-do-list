import { Router } from 'express';
import { TaskController } from './controller/TaskController';

const router = Router();
const taskController = new TaskController();

router.post('/', taskController.create);
router.get('/:username', taskController.findByUsername);
router.patch('/:username/:activity_name', taskController.replaceActivity);
router.patch('/:username', taskController.updateActivity);
router.patch('/delete/:username/:activity_name', taskController.deleteOneActivity);
router.patch('/delete/:username/all/all', taskController.deleteActivity);

export { router };