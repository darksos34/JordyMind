INSERT INTO roles(id,name) VALUES('1','ROLE_USER');
INSERT INTO roles(id,name) VALUES('2','ROLE_MODERATOR');
INSERT INTO roles(id,name) VALUES('3','ROLE_ADMIN');

INSERT INTO users(created_at, updated_at, email, password, username) VALUES ('2020-05-12 08:00:00', '2020-05-12 08:00:00', 'user@codenetwork.nl', '$2a$10$GckdgpfIJ.NhceNRgh6Aue4AX9fcrmA6mbRRU824UYl8tYAXd3GvG', 'user');
INSERT INTO users(created_at, updated_at, email, password, username) VALUES ('2020-05-12 08:00:00', '2020-05-12 08:00:00', 'moderator@codenetwork.nl', '$2a$10$ozJqsGBy.S9uBPuPIFTYP.qzbbUiF5HPggzZXr/tpwehGuIZuVLae', 'moderator');
INSERT INTO users(created_at, updated_at, email, password, username) VALUES ('2020-05-12 08:00:00', '2020-05-12 08:00:00', 'admin@codenetwork.nl', '$2a$10$CzuliGNQSRoi8IDMe/RUreQWpbmViC.E5qaZjhpAjypgfsOF9afyG', 'admin');

INSERT INTO user_roles(user_id, role_id) VALUES ('1', '1');
INSERT INTO user_roles(user_id, role_id) VALUES ('2', '1');
INSERT INTO user_roles(user_id, role_id) VALUES ('2', '2');
INSERT INTO user_roles(user_id, role_id) VALUES ('3', '1');
INSERT INTO user_roles(user_id, role_id) VALUES ('3', '2');
INSERT INTO user_roles(user_id, role_id) VALUES ('3', '3');

INSERT INTO profiles(first_name, last_name, phone_number, gender, date_of_birth, address, address_number, zip_code, city, country, user_id) VALUES ('userFirst', 'userLast', '0101234567', 'MALE', '2000-01-01 01:01:01.332', 'Blaak', '101', '3011TA', 'Rotterdam', 'NL', 1);
INSERT INTO profiles(first_name, last_name, phone_number, gender, date_of_birth, address, address_number, zip_code, city, country, user_id) VALUES ('moderatorFirst', 'moderatorLast', '0101234568', 'FEMALE', '2000-01-01 01:01:01.332', 'Blaak', '202', '3011AB', 'Rotterdam', 'NL', 2);
INSERT INTO profiles(first_name, last_name, phone_number, gender, date_of_birth, address, address_number, zip_code, city, country, user_id) VALUES ('adminFirst', 'adminLast', '0101234569', 'OTHER', '2000-01-01 01:01:01.332', 'Blaak', '303', '3011GB', 'Rotterdam', 'NL', 3);
