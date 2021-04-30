import { Router } from 'express';
import { pageLanding } from './pages';
import { TaskController } from './controller/TaskController';

const router = Router();
const taskController = new TaskController();

router.get('/', pageLanding);
router.post('/', taskController.create);
router.get('/:username', taskController.findByUsername);
router.patch('/replace/:username/:activity_name', taskController.replaceActivity);
router.patch('/update/:username', taskController.updateActivity);
router.patch('/remove/:username/:activity_name', taskController.removeActivity);
router.patch('/delete/:username', taskController.deleteActivity);

export { router };