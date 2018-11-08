SET SQL_MODE=ANSI_QUOTES;

create table "Person" (
    pid             int not null auto_increment,
    title           varchar(255),
    firstname       varchar(255),
    lastname        varchar(255),
    oldfirstname    varchar(255),
    oldlastname     varchar(255),
    sex             binary(1),
    nationalid      varchar(13),
    birthdate       year,
    houseno         varchar(50),
    building        varchar(255),
    villageno       varchar(50),
    soi             varchar(255),
    subdistrict     varchar(255),
    district        varchar(255),
    province        varchar(255),
    postalcode      varchar(15),
    country         varchar(255),
    hometel         varchar(15),
    mobile_1        varchar(15),
    mobile_2        varchar(15),
    email           varchar(255),
    primary key (tid)
);

create table "Staff" (
    staffid     int not null auto_increment,
    pid         int not null,
    start_year  year,
    end_year    year,
    primary key (staffid),
    foreign key (pid) references "Person"(pid)
);

create table "StaffInfo" (
    infoid      int not null auto_increment,
    staffid     int not null,
    start_year  year not null,
    end_year    year,
    info        varchar(512),
    primary key (infoid),
    foreign key (staffid) references "Staff"(staffid)
);

-- TODO: implement this when merging the two system
create table "Student" (

);
