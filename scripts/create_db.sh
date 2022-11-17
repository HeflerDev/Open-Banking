#!/bin/bash

docker exec -it database psql postgres postgres -c "CREATE DATABASE open_bank;"
docker exec -it api sh -c "npx knex migrate:up"