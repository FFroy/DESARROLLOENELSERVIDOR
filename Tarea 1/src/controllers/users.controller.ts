import { Request, Response } from "express";

class UsersControllers{
    getAll(req: Request , res: Response)  {
        res.send([]);
    }
}

const usersControllers = new UsersControllers();
export default usersControllers;