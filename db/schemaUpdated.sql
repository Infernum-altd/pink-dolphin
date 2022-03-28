DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS articles CASCADE;
DROP TABLE IF EXISTS credentials CASCADE;

CREATE TABLE categories
(
    id   serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE credentials
(
    id   serial PRIMARY KEY,
    login VARCHAR(255) NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE articles
(
    id              serial PRIMARY KEY,
    title           VARCHAR(255) NOT NULL,
    introduction    TEXT         NOT NULL,
    article_content TEXT         NOT NULL,
    img_preview     VARCHAR(255) NOT NULL,
    creation_date   DATE         NOT NULL,
    category_id     INTEGER      NOT NULL,
    CONSTRAINT fk_article_category FOREIGN KEY (category_id) REFERENCES categories (id)
);

INSERT INTO categories (name) VALUES ('Java');
INSERT INTO categories (name) VALUES ('Hybris');
INSERT INTO categories (name) VALUES ('AWS');
INSERT INTO categories (name) VALUES ('Angular');