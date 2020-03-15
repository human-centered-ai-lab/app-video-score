#!/bin/sh

# Below shells script is required because the flask container need to wait for postgres db server to startup before
# accessing it below.


# TODO - for production take the password from the .env
RETRIES=4
USER=postgres
DATABASE=users_dev
HOST=postgres

until psql -h $HOST -U $USER -d $DATABASE -c "select 1" > /dev/null 2>&1 || [ $RETRIES -eq 0 ]; do
  echo "Waiting for postgres server to start, $((RETRIES)) remaining attempts..."
  RETRIES=$((RETRIES-=1))
  sleep 1
done

echo "PostgreSQL started!"


# Run below commands from manage.py to initialize db and have some default data.
# add a flag to preserve the DB at a build
if [ ! -f  DBINIT.DONE ]; then
    python manage.py recreate_db
    python manage.py seed_db
    touch DBINIT.DONE
fi


uwsgi --py-autoreload 1 --ini /etc/uwsgi.ini


# THIS is the websockets try
#python runflask.py
