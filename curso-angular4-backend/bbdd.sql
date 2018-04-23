CREATE DATABASE IF NOT EXISTS curso_angular4;

USE curso_angular4;

CREATE TABLE productos(
    id          int(255) auto_increment not null,
    nombre      varchar(255),
    descripcion text,
    precio      real(10,2),
    rutaImagen  varchar(255),
    CONSTRAINT pk_productos PRIMARY KEY (id)
)ENGINE=InnoDb;