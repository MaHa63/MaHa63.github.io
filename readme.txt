
ToDo -ohjelmiston toteutus
==========================

Front-End:

src
App.jos				Clientin toiminnalisuus
App.css				Clientin tyylit

src/images
todo_logo.jpg		Ohjelmiston logo yläpaneeliin

Back-End:

back-end/src
Server.js			Serverin toiminnallisuus

Ympäristön käynnistys:

Front-End

cd <sovellushakemisto>
npm start

Back-End

cd <sovellushakemisto>
node back-end/src/Server.js





Tarvittavat ohjelmistot:

Tietokanta:
PostgreSQL 9.6.6 (Sovellus on integroitu tähän versioon)

https://www.postgresql.org/download/windows/

1.
Asettakaa käyttäjätunnukseksi

postgres

2.
jos kysyy asennuksen yhteydessä salasanan asetusta, niin salasanaksi tulee

salasana

Tietokantabrowseri:
pgAdmin4	versio > 2.0

Tietokantaskema:
id				bigint
name			character varying 50
owner			character varying 40

