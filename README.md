# ai_chatbot

This is the code repository for AI chatbot which uses ReactJs for frontEnd and NodeJs ( using expressJS) for server-side development
Application is powered by Open AI's API which are trusted to get exact results.

# Pre-Requisites

User needs to have node to run both client as well as server on it's local machine.
Follow `https://nodejs.dev/en/learn/how-to-install-nodejs/` , Video :`https://www.youtube.com/watch?v=JINE4D0Syqw`

# To install dependencies ( Client and Server)

`npm install ( or npm i)`

# To start client

`npm start`

# To start server

`node index.js`

# NOTE:

Before starting server make sure to produce an API key by logging in to `https://openai.com/` and copy-paste the organization id and api key in config.js file.
Server would run on port 3090
Client would run on port 3000
This application uses Open AI's public API to get the responses according to user input/query .
Curently default input language is English only.

# Current features

=> chatting with AI ( chatting service),
=> Moderation over user input,
=> translate given text to other language ( Spanish, Italian, French, Hindi... furthur more to come) and
=> code translation from one language to other ( Java, Javascript, Python , Ruby ... more to come)

# Upcoming features:

=> Allow users to maintain an account to keep a track of their conversation which would be assisted by JWT for authentication + authorization.
=> Giving user suggestion for input .
=> Prime memebership to user where they can enjoy unlimited requests and response would not be limited to 2000 tokens (as it is now )
=> Integration of latest "gpt-4" model to get user response that would be more accurate and effective.
