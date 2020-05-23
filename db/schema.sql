DROP DATABASE IF EXISTS ohBadBurgerDB;

create database ohBadBurgerDB;

use ohBadBurgerDB;

create table Burger (
id INT NOT NULL AUTO_INCREMENT,
Title VARCHAR(30),
CheckOut BOOLEAN DEFAULT true,
Purchased BOOLEAN DEFAULT false,
time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

create table Ingredients (
id INT NOT NULL AUTO_INCREMENT,
Name VARCHAR (30),
SpiceLvL INT,
Patty BOOLEAN DEFAULT false,
Topping BOOLEAN DEFAULT true,
Sauce BOOLEAN DEFAULT false,
Price DECIMAL(4,2),
PRIMARY KEY (id)
);

create table burgerOrder(
id INT NOT NULL AUTO_INCREMENT,
BurgerID INT,
IngredientID INT,
PRIMARY KEY(id),
FOREIGN KEY (BurgerID) REFERENCES Burger(id),
FOREIGN KEY (IngredientID) REFERENCES Ingredients(id)
);
