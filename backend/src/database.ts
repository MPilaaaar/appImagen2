import mysql from 'promise-mysql';
import conexion from './conexion';

const pool = mysql.createPool(conexion.database);
pool.getConnection().then(connection => {pool.releaseConnection(connection);
    console.log("La base de datos está conectada");
});

export default pool;