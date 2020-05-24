DROP DATABASE IF EXISTS ohBadBurgerDB;

create database ohBadBurgerDB;

use ohBadBurgerDB;

create table burgers (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
checkOut BOOLEAN DEFAULT true,
purchased BOOLEAN DEFAULT false,
time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

create table ingredients (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR (30),
spiceLvL INT,
patty BOOLEAN DEFAULT false,
topping BOOLEAN DEFAULT true,
sauce BOOLEAN DEFAULT false,
price DECIMAL(4,2),
PRIMARY KEY (id)
);

create table burgerOrder(
id INT NOT NULL AUTO_INCREMENT,
burgerID INT,
ingredientID INT,
PRIMARY KEY(id),
CONSTRAINT burger FOREIGN KEY (burgerID) REFERENCES burgers(id) ON DELETE CASCADE,
CONSTRAINT ingredients FOREIGN KEY (ingredientID) REFERENCES ingredients(id) ON DELETE CASCADE
);