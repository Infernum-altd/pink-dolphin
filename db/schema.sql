DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS article_categories CASCADE;
DROP TABLE IF EXISTS category_alias CASCADE;
DROP TABLE IF EXISTS articles CASCADE;
DROP TABLE IF EXISTS tags CASCADE;
DROP TABLE IF EXISTS article_tag CASCADE;
DROP TABLE IF EXISTS article_contents CASCADE;
DROP TABLE IF EXISTS article_comments CASCADE;

CREATE TABLE users
(
    id       serial PRIMARY KEY,
    email    VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255)        NOT NULL,
    name     VARCHAR(50)         NOT NULL DEFAULT 'Valera'
);

CREATE TABLE article_categories
(
    id            serial PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE category_alias
(
    id          serial PRIMARY KEY,
    alias_name  VARCHAR(255) NOT NULL,
    category_id INTEGER,
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES article_categories (id)
);

CREATE TABLE articles
(
    id                  serial PRIMARY KEY,
    title               VARCHAR(255) NOT NULL,
    creation_date       DATE         NOT NULL,
    author_id           INTEGER,
    article_category_id INTEGER,
    CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES users (id),
    CONSTRAINT fk_article_category FOREIGN KEY (author_id) REFERENCES users (id)
);

CREATE TABLE tags
(
    id        SERIAL PRIMARY KEY,
    tag_value TEXT
);

CREATE TABLE article_tag
(
    article_id INTEGER,
    tag_id     INTEGER,
    PRIMARY KEY (article_id, tag_id),
    CONSTRAINT fk_article FOREIGN KEY (article_id) REFERENCES articles (id),
    CONSTRAINT fk_tag FOREIGN KEY (tag_id) REFERENCES tags (id)
);

CREATE TABLE article_contents
(
    id                     serial PRIMARY KEY,
    content_index_position INTEGER NOT NULL,
    content                TEXT    NOT NULL,
    article_id             INTEGER,
    CONSTRAINT fk_article FOREIGN KEY (article_id) REFERENCES articles (id)
);

CREATE TABLE article_comments
(
    id               serial PRIMARY KEY,
    article_id       INTEGER REFERENCES articles (id),
    message          TEXT NOT NULL,
    reply_comment_id INTEGER,
    CONSTRAINT fk_comment FOREIGN KEY (reply_comment_id) REFERENCES article_comments (id)
);