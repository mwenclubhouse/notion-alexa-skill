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

## AWS Configuration 
1. Handler = dist/index.handler

## Environment Variables
```text
NOTION_AUTH=[Authentication for Notion Board]
NOTION_KATABAN_BOARD=[ID of Kataban Board Used]
NOTION_NOT_STARTED_LABEL=[Name of the Not Started Label ex. 1. Not Started]
NOTION_ATTEMPTED_LABEL=[Name of the Attempted Label ex. 2. Attempted]
NOTION_IN_PROGRESS_LABEL=[Name of the Attempted Label ex. 3. In Progress]
NOTION_COMPLETED_LABEL=[Name of Completed Label ex. 4. Completed]
```

## Talking with Alexa Examples (Not Completed)
1. Alexa, ask matt notion not started tasks
2. Alexa, ask matt notion attempted tasks
3. Alexa, ask matt notion in progress tasks
4. Alexa, ask matt notion tasks finished today
5. Alexa, ask matt notion to remind me to ${task label} on ${date}
