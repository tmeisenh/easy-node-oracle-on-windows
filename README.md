easy-node-oracle-on-windows
============
This is the easy way to get node running with oracle on windows.

This example Dockerfile creates a docker container that has all of our dependencies (node, oracle) and is based off of a proper operating system (linux, for example) and we mount our application's code directory into that container.  After we spin the container up, we can simply exec into it and npm install, npm test, etc.

A docker-compose.yml was included to give a playground for testing things against an actual oracle database.

Why?
See [this](https://github.com/oracle/node-oracledb/issues/322)
