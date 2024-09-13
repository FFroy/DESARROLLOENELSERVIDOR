npm instal

para ejecutar npm start

entrar en el navegador a http://localhost:3000/users No permitira el acceso de inicio

Como esta harcodeado el rol del usuario, para cambiarlo y dejar que el usuario si pase es nesesario cambiarloen dist\middlewares\rol.js Linea 8 y cambiarlo, guardar y ejecutar npm start y entrar entrar o re cargar http://localhost:3000/users y si se permitira el acceso

ejemplo const hardcodedUser = { id: '1', name: 'John Doe', role: 'usuario' // usar admin o gerente <-------- en esta parte poner uno de los 2 roles permitidos los cuales se indican };