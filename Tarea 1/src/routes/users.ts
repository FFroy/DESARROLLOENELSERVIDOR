import { Router } from "express";
import usersControllers from '../controllers/users.controller';
import { roles } from "../middlewares/rol";

const router = Router();

//router.get('', usersControllers.getAll)
router.get('', roles(['admin', 'gerente']), usersControllers.getAll);



export default router;