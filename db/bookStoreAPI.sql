CREATE TABLE Users (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
firstName VARCHAR(255),
lastName VARCHAR(255),
email VARCHAR(255),
password VARCHAR(255));

{
INSERT INTO Users (id, firstName, lastName, email, password) VALUES ('1', 'Lynn', 'Apedo', 'lynnapedo@gmail.com', 'simplon1');
}
INSERT INTO Users (id, firstName, lastName, email, password) VALUES (NULL, 'Mata', 'Miguel', 'miguelito@gmail.com', 'simplon1');
{
{
INSERT INTO Users (id, firstName, lastName, email, password) VALUES (NULL, 'Soulimane', 'Hatim', 'soulimanehatim@gmail.com', 'simplon1');
}

CREATE TABLE Book (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
title VARCHAR(255),
price INT,
author VARCHAR(255),
category VARCHAR(255),
genre VARCHAR(255),
isbn VARCHAR(255));

{
INSERT INTO Book (id, title, price, author, category, genre, isbn) VALUES ('1', 'Harry Potter', '15', 'Michel Soulom', 'Roman', 'Aventure ', 'RA01');
}
{
INSERT INTO Book (id, title, price, author, category, genre, isbn) VALUES ('2', 'Titanic', '10', 'Francois', 'Roman', 'Romance', 'RA02');
}
{
INSERT INTO Book (id, title, price, author, category, genre, isbn) VALUES ('3', 'Michael Jackson', '20', 'Harold whitmen', 'Music', 'Biographie', 'RA03');
}

CREATE TABLE Rent (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
orderNumber INT,
date DATETIME,
quantity INT,
total INT,
userId INT NOT NULL,
FOREIGN KEY (userId) REFERENCES Users (id),
bookId INT NOT NULL,
FOREIGN KEY (bookId) REFERENCES Book (id));

{
INSERT INTO Rent (id, orderNumber, date, quantity, total, userId, bookId) VALUES ('1', '0001', '2021-02-25 15:01:44', '1', '20', '1', '1');
}
{
INSERT INTO Rent (id, orderNumber, date, quantity, total, userId, bookId) VALUES ('2', '0002', '2021-02-25 15:01:44', '1', '15', '1', '2');
}
{
SELECT FROM Rent WHERE bookId>=1
}
{
SELECT FROM Rent WHERE userId>=1
}

CREATE TABLE WishLists (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
bookId INT NOT NULL,
FOREIGN KEY (bookId) REFERENCES Book (id),
userId INT NOT NULL,
FOREIGN KEY (userId) REFERENCES Users (id),
nameList VARCHAR(255));

}
INSERT INTO WishLists (id, bookId, userId, nameList) VALUES ('1', '3', '3', 'Mon Premier acheter');
}
