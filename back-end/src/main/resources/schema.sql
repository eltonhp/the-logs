CREATE TABLE LOG (
    id   SERIAL,
    IP VARCHAR(25) NOT NULL,
    STATUS NUMERIC(5),
    AGENT VARCHAR(255),
    DATA TIMESTAMP,
    PRIMARY KEY (id)
);
