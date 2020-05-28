# React Front End Infrastructure
This directory houses all the infrastructure components for the React Front End Microservice


## Abstract

The React front end is a __chain build__. A Nodejs s2i build is done and the output image from that build is used as an input to a caddy2 build. 

In other words

NodeJS s2i > React builds assets > assets pushed into an image with caddy2

The deployment is fairly simple, caddy2 will recieve a __Caddyfile__ configmap and a deployment config manages its lifecycle. 

