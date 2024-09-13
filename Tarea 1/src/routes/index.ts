import {Router} from 'express';
import usersRoutes from './users';


const router = Router();

//router.use('/users', authMiddleware, usersRoutes);
router.use('/users',  usersRoutes);

export default router;

