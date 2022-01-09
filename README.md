# Notion Alexa Skill for MWENCLUBHOUSE
This uses a combination of Alexa API and the Notion Board API to create new Dashboard Item via Amazon's Alexa Devices.
For Matthew Wen, we use an Echo Show 8.

## Create Production Build
This creates a production build of the application that can be sent up manually to AWS Lambda.
```bash
$ docker build -t alexa . # build the container to build the application
$ docker run -d -v $(pwd):/usr/src/app --name=alexa alexa # creates and runs docker container, will output app.zip
$ docker container start alexa # run the container to rebuild zip file
```