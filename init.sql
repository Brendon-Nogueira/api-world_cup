CREATE TABLE IF NOT EXISTS partidas (

id integer primary key ,
time_m varchar(50) not null,
time_v varchar(50) not null,
data_partida date not null,
placar_mandante integer not null,
placar_visitante integer not null
);

INSERT INTO partidas (id, time_m, time_v, data_partida, placar_mandante, placar_visitante) VALUES (1, 'Brasil', 'Argentina', '2022-11-24', 1, 0);
INSERT INTO partidas (id, time_m, time_v, data_partida, placar_mandante, placar_visitante) VALUES (2, 'França', 'Inglaterra', '2022-11-26', 4, 2);
INSERT INTO partidas (id, time_m, time_v, data_partida, placar_mandante, placar_visitante) VALUES (3, 'Alemanha', 'Catar', '2022-11-29', 7, 0);
INSERT INTO partidas (id, time_m, time_v, data_partida, placar_mandante, placar_visitante) VALUES (4, 'Suíça', 'Sérvia', '2022-12-01', 1, 2);
INSERT INTO partidas (id, time_m, time_v, data_partida, placar_mandante, placar_visitante) VALUES (5, 'Senegal', 'Dinamarca', '2022-12-04', 1, 1);