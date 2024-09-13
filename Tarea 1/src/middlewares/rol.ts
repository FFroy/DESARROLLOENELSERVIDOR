import { Request, Response, NextFunction } from "express";
import { User } from "../types/user";

// Hardcodeo del usuario con rol
const hardcodedUser: User = {
    id: '1',
    name: 'John Doe',
    role: 'usuario' // usar admin o gerente
    
};

// Middleware para validar roles
export function roles(allowedRoles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        
        const userRole = hardcodedUser.role;

        if (allowedRoles.includes(userRole)) {
            return next();
        } else {
            return res.sendStatus(403); 
        }
    };
}
