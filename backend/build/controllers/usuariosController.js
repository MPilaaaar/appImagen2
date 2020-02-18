"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'MiClaveSrecreta1234';
class UsuariosController {
    index(req, res) {
        res.json({ 'message': 'Estás en usuarios' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO usuarios SET ?', [req.body]);
            res.json({ 'message': 'Se ha creado el usuario' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM usuarios', [req.body]);
            res.json(usuarios);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE usuarios SET ? WHERE id=?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM usuarios WHERE id=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield database_1.default.query('SELECT * FROM usuarios WHERE id=?', [req.params.id]);
            res.json(usuario);
        });
    }
    readlogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            const copiaUsuario = {
                nombre: req.body.nombre,
                imagen: req.body.imagen
            };
            const usuario = yield database_1.default.query('SELECT * FROM usuarios WHERE nombre=? AND imagen=?', [req.body.nombre, req.body.imagen]);
            console.log(usuario);
            console.log(usuario.length);
            if (usuario.length == 0) {
                res.json({ message: 'Error al loguearse.' });
            }
            else {
                // res.json(usuario);
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: copiaUsuario.nombre }, SECRET_KEY, { expiresIn: expiresIn });
                console.log(accessToken);
                res.json(accessToken);
            }
        });
    }
}
exports.usuariosController = new UsuariosController;
