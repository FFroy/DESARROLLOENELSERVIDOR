"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = roles;
// Hardcodeo del usuario con rol
const hardcodedUser = {
    id: '1',
    name: 'John Doe',
    role: 'usuario' // usar admin o gerente
};
// Middleware para validar roles
function roles(allowedRoles) {
    return (req, res, next) => {
        const userRole = hardcodedUser.role;
        if (allowedRoles.includes(userRole)) {
            return next();
        }
        else {
            return res.sendStatus(403);
        }
    };
}
