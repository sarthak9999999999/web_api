CREATE DATABASE employee_system;

CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    salary NUMERIC 
);

INSERT INTO employee(name,salary) VALUES('JOHN',4000),('RYAN',2000),('MANOJ',8789),('Pankaj',1235),('Madan',9389),('Sunil',789),('Dilip',382),('Mayank',6789);