#!bin/sh

yarn build

docker build -t tonypai/rsvp:$1 .

docker push tonypai/rsvp:$1
