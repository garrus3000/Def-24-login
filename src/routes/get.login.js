import { Router } from "express";
import path from "path";
import { fileURLToPath } from 'url';


const routerLogin = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const login = path.join(__dirname, '../../public/pages/login.html');
const index = path.join(__dirname, '../../public/pages/index.html');

//render condicional para el login
routerLogin.get("/", (req, res) => {
    const nombre = req.session?.nombre;

    if (nombre) res.sendFile(index);
    else res.sendFile(login);
});

routerLogin.post('/login', (req, res) => {
    req.session.nombre = req.body.nombre;
    res.redirect('/');
})

// routerLogin.get('/getName', (req, res) => {
//     if (req.session.nombre) {
//         res.send(req.session.nombre);
//     }
//     else {
//         res.send('No hay nombre');
//     }
// })

// routerLogin.get('/logout', (req, res) => {
//     try {
//         req.session.destroy((err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.redirect('/logout');
//             }
//         })
//     } catch (err) {
//         console.log(err);
//     }
// })

// routerLogin.get('/logoutMsj', (req, res) => {
//     try {
//         res.sendFile(__dirname + '/views/logout.html');
//     }
//     catch (err) {
//         console.log(err);
//     }
// })

// routerLogin.get('/', (req, res) => {
//     const nombre = req.session?.nombre
//     if (nombre) {
//         res.redirect('/')
//     } else {
//         res.redirect('/login')
//     }
// })

// routerLogin.get("/login", (req, res) => {
//     res.sendFile(login);
// });


// routerLogin.route('/login')
//     .get((req, res) => { res.sendFile(login) })
//     .post((req, res) => {
//         req.session.nombre = req.body.nombre





export default routerLogin;