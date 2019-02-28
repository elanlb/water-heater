#!/bin/bash

# activate pin
echo "1" > /sys/class/gpio/gpio4/value

# sleep and then deactivate pin
sleep 10s
echo "0" > /sys/class/gpio/gpio4/value