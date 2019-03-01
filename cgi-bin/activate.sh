#!/bin/bash

# activate pin
echo "out" > /sys/class/gpio/gpio4/direction
echo "1" > /sys/class/gpio/gpio4/value

# sleep and then deactivate pin
sleep 10m
echo "0" > /sys/class/gpio/gpio4/value