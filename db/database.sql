CREATE DATABASE IF NOT EXISTS shupitosdb;

USE shupitosdb;

CREATE TABLE cocteles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    instrucciones TEXT,
    tipo_vaso VARCHAR(50), -- tipo de vaso recomendado
    categoria_id INT, -- para asociar a una categoría (por ejemplo: Aperitivo, Digestivo)
    imagen_url VARCHAR(255), -- URL de la imagen del cóctel
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DESCRIBE cocteles;

INSERT INTO categorias VALUES
(1,'Clásicos', 'Cócteles icónicos y atemporales que son conocidos a nivel mundial.'),
(2,'Stop inventing', 'Cócteles que se me ocurren porque sí.');