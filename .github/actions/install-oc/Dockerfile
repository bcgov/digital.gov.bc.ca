# this dockerfile serves as a runner action
# it contains the oc binary which can than be natively run in the action
FROM ubuntu:18.04

RUN apt-get update && apt-get install -y curl
RUN mkdir /opt/tools
WORKDIR /opt/tools
RUN curl https://mirror.openshift.com/pub/openshift-v3/clients/3.11.232/linux/oc.tar.gz -o oc.tar.gz 
RUN tar xvzf oc.tar.gz

ENV PATH="${PATH}:/opt/tools"


RUN printf "oc installed" && oc version




