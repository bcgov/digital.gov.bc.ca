# Caddy Server

This houses the infrastructure for deploying [Caddy 2](https://caddyserver.com/). Caddy 2 is a lightweight `go` based webserver. 

We use it to serve up the built assets from the react-front end component. 


## Contents of this directory

The directory simply houses a Caddyfile, this is a sample file that a `ConfigMap` has been created from. The ConfigMap is mounted into the Caddy Pod in openshift at runtime. 

## Getting Caddy running locally

Caddy maintains a set of images which can be run with docker. Take a look at 
https://hub.docker.com/_/caddy for more info. We are using the `2.0.0` docker image.


foo
