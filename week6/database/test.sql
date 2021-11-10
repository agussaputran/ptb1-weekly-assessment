ALTER TABLE districts
ADD CONSTRAINT fk_provinces
FOREIGN KEY (province_id)
REFERENCES provinces(id)
ON DELETE CASCADE;

-- Bikin table districts
CREATE TABLE IF NOT EXISTS districts (id integer NOT NULL, province_id integer NOT NULL, name varchar(255), created_at timestamp, updated_at timestamp, deleted_at timestamp);
-- tambah primary key
ALTER TABLE districts ADD PRIMARY KEY (id); 
-- tambah foreign key
ALTER TABLE districts                                                                                                                    ADD CONSTRAINT fk_provinces
FOREIGN KEY (province_id)
REFERENCES provinces(id)
ON DELETE CASCADE;

-- Bikin table sub_districts
CREATE TABLE IF NOT EXISTS sub_districts (id integer NOT NULL, district_id integer NOT NULL, name varchar(255), created_at timestamp, updated_at timestamp, deleted_at timestamp);
-- tambah primary key
ALTER TABLE sub_districts ADD PRIMARY KEY (id);
-- tambah foreign key
ALTER TABLE sub_districtsADD CONSTRAINT fk_districts
FOREIGN KEY (district_id)REFERENCES districts(id)
ON DELETE CASCADE;
ALTER TABLE