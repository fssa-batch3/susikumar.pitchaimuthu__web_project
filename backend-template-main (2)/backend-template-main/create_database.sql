USE jayaprakash;

create table if not exists signin (

email_id VARCHAR(40) PRIMARY KEY,
first_name VARCHAR(40),
middle_name VARCHAR(40),
last_name VARCHAR(40),

phnumber VARCHAR(40),
age  VARCHAR(40),
password  VARCHAR(40)

);
describe signin;

alter table signin
modify column email_id varchar(40);
describe signin;


alter  table signin;

INSERT INTO signin ( email_id,first_name,middle_name,last_name,phnumber,age,password)
values ( 'jp@gmail.com','jayaprakash','jp', 'jaya','9876543210','18','sachin');

SELECT * FROM signin;


create table if not exists apply_surviour (

apply_id VARCHAR(40)  primary key,
name VARCHAR(40),
surviour_no VARCHAR(40),
village VARCHAR(40),
village_no VARCHAR(40),
taluk VARCHAR(40)
);

INSERT INTO apply_surviour( apply_id,name,surviour_no,village,village_no,taluk)
values ( 'jp123','jayaprakash','50', 'kpm','45','vedai');

SELECT * FROM apply_surviour;

create table if not exists apply_surviour (
apply_id VARCHAR(40)  primary key,
name VARCHAR(40),
surviour_no VARCHAR(40),
village VARCHAR(40),
village_no VARCHAR(40),
taluk VARCHAR(40)
);

create table if not exists stamp (
stamp_id VARCHAR(40)  primary key,
name VARCHAR(40),
price VARCHAR(40),
description VARCHAR(40)
);


create table if not exists apply_surviour (
apply_id VARCHAR(40)  primary key,
name VARCHAR(40),
surviour_no VARCHAR(40),
village VARCHAR(40),
village_no VARCHAR(40),
taluk VARCHAR(40)
);