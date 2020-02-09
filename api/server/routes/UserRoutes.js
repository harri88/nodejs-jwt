import { Router } from 'express';
import userController from '../controllers/UserController';

const router = Router();

router.get('/', userController.getAllUsers);
router.post('/', userController.addUser);
router.get('/:id', userController.getAUser);
router.put('/:id', userController.updatedUser);
router.delete('/:id', userController.deleteUser);

export default router;