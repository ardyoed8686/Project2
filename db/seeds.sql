USE todo_db;
-- create default category --
INSERT INTO Task (name, type, title, description, due) 
VALUES ('John', 'chores', 'laundry', 'wash bedding', '11/15/2019');

INSERT INTO Task (name, type, title, description, due) 
VALUES ('John', 'homework', 'math', 'do geometry pages 120-122', '11/14/2019');

INSERT INTO Task (name, type, title, description, due) 
VALUES ('Mom', 'chores', 'cleaning', 'wash dinner dishes', '11/14/2019');