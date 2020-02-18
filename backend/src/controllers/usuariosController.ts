import {Request,Response} from 'express';
import pool from '../database';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY =  'MiClaveSrecreta1234';


class UsuariosController {
    index(req:Request,res:Response){
        res.json({'message': 'Estás en usuarios'});
    }

    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO usuarios SET ?', [req.body]);
        res.json({'message': 'Se ha creado el usuario'});
    }

    public async read(req:Request,res:Response){
        const usuarios = await pool.query('SELECT * FROM usuarios', [req.body]);
        res.json(usuarios);
    }

    public async update(req:Request,res:Response){
        await pool.query('UPDATE usuarios SET ? WHERE id=?', [req.params.id]);
    }

    public async delete(req:Request,res:Response){
        await pool.query('DELETE FROM usuarios WHERE id=?', [req.params.id]);
    }

    public async readone(req:Request,res:Response){
        const usuario = await pool.query('SELECT * FROM usuarios WHERE id=?', [req.params.id]);
        res.json(usuario);
    }

    public async readlogin(req:Request,res:Response){
        // console.log(req.body);
        const copiaUsuario = {
            nombre: req.body.nombre,
            imagen: req.body.imagen
        };
        const usuario = await pool.query('SELECT * FROM usuarios WHERE nombre=? AND imagen=?', [req.body.nombre, req.body.imagen]);
        console.log(usuario);
        console.log(usuario.length);
        
        if(usuario.length == 0){
            res.json({ message: 'Error al loguearse.' })
        }
        else{
            // res.json(usuario);
            const expiresIn = 24*60*60;
            const accessToken = jwt.sign({ id: copiaUsuario.nombre },
                                            SECRET_KEY,
                                            { expiresIn: expiresIn });
            console.log(accessToken);
            res.json(accessToken);
        }
    }
}
export const usuariosController = new UsuariosController;
