CREATE TABLE public."user"
(
    id SERIAL,
    PRIMARY KEY (id),
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    sex VARCHAR(255)
);

create TABLE public."couple" (
    id SERIAL PRIMARY KEY,
    boy_id INTEGER,
    FOREIGN KEY (boy_id) REFERENCES "user"(id),
    girl_id INTEGER,
    FOREIGN KEY (girl_id) REFERENCES "user"(id)
);

create TABLE public."compliment" (
    id SERIAL PRIMARY KEY,
    couple_id INTEGER,
    FOREIGN KEY (couple_id) REFERENCES "couple" (id),
    show_date DATE,
    compliment_text VARCHAR(255)
);


create TABLE public."memory" (
    id SERIAL PRIMARY KEY,
    couple_id INTEGER,
    FOREIGN KEY (couple_id) REFERENCES "couple" (id),
    title VARCHAR(255),
    description VARCHAR(255),
    memory_date DATE,
    bg_color_id INTEGER
);

create TABLE public."special_date" (
    id SERIAL PRIMARY KEY,
    couple_id INTEGER,
    FOREIGN KEY (couple_id) REFERENCES "couple" (id),
    title VARCHAR(255),
    description VARCHAR(255),
    action_date DATE,
    location VARCHAR(255),
    photos_id INTEGER
);