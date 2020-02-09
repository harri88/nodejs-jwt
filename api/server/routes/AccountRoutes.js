import { Router } from 'express';
import accountController from '../controllers/AccountController';

const router = Router();

router.post('/login', accountController.login);


export default router;