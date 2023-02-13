CREATE DATABASE IF NOT EXISTS CURSO_ANGULAR;
USE CURSO_ANGULAR;

CREATE TABLE PRODUCTS(
    id INT( 255 ) AUTO_INCREMENT NOT NULL,
    name VARCHAR( 255 ),
    description TEXT,
    price DOUBLE,
    image VARCHAR( 255 ),
    CONSTRAINT PK_PRODUCTS PRIMARY KEY( id )
) ENGINE = InnoDb CHARSET = utf8 AUTO_INCREMENT = 1;

INSERT INTO PRODUCTS ( name, description, price ) VALUES
( 'Moto RC', 'Moto de Juguete Radio control', 50 ),
( 'Unlock', 'Juego de Mesa de Escape Room', 29.99 ),
( 'Dixit', 'Juego de Cartas creativo', 49.99 ),
( 'Play Station 5', 'Consola de sobremesa de la marca de Sony', 599.99 ),
( 'Nintedo Switch', 'Consola portantil de la marca de Nintendo', 329.99 );