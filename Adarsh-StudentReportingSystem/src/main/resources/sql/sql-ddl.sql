use `studentReportingSystem`;

CREATE TABLE student
(
    id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(250)  
);


CREATE TABLE subject
(
    id int PRIMARY KEY ,
    subject varchar(250)  
);


CREATE TABLE semester
(
    id int PRIMARY KEY ,
    name varchar(250) NOT NULL 
);


CREATE TABLE marksteet
(
    id int PRIMARY KEY AUTO_INCREMENT,
    student_id int  ,
    semester_id int  ,
    subject_id int  ,
    marks int(10)  
);


