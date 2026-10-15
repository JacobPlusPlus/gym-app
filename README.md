OPEN src/assets/idea
we are doing sth like this idk xd
look at trello 
see what you are assigned to 
from develop create new branch like this -> feature sth
when you are finished create Pull Request to develop and someone will accept the changes

we will se maybe this approach is better :D
good luck!

---

DATABASE (postgres)
you need docker installed
run in the project folder:

    docker compose up -d

this starts postgres and runs db/01_schema.sql and db/02_seed.sql (tables + sample data)
connect with: postgres://gym:gym@localhost:5432/gym_app
or from terminal: docker compose exec db psql -U gym -d gym_app

the sql files only run when the database is created for the first time,
so if you change them do: docker compose down -v   and then up again

how the tables look -> docs/database.md
