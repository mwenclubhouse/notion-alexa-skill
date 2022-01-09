FROM node:16

WORKDIR /usr/src

RUN apt update
RUN apt upgrade -y
RUN apt install zip -y

COPY build.sh .
CMD ["/bin/bash", "build.sh"]