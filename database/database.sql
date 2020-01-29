CREATE DATABASE dbUsuarios;
USE dbUsuarios;
CREATE TABLE Usuarios(
    id INT (3) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    imagen VARCHAR(200)
);
