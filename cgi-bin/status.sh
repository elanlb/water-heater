#!/bin/bash

# content type header
printf "Content-type: text/plain \n\n"

# initialize the pins
if [ ! -f /sys/class/gpio/gpio4/value ]
then
    echo "4" > /sys/class/gpio/export
fi

# status of pin
cat /sys/class/gpio/gpio4/value