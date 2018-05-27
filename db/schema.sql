-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table wishes.
CREATE TABLE burgers
(
id int (30) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(200) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);
