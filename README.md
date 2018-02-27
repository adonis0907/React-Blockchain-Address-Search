# React Blockchain Address Search w Live Socket Updates

## Quick Setup

* Run npm install & npm start.
* Open the app on localhost:3000 
* (optional) to run in ngrok copy and paste url from console

App runs on Node and express. Npm run will run a custom script to build the app, and open a server on public/build. On terminal you will see Gulp compiling the app. Once it's finished you will see the server in which the app is running. Go to localhost:3000 or copy and paster the ngrok address from console.

## Using the App

Very simple, just put a blockchain address, and hit send. You will get transaction data (10), and automatically connect to blockchain's websocket to receive any new incoming transaction.

## Code Walkthrough

I'm very new to React, but wanted to take the time to build something nice. Although it's a small app, created all components in a structure that I consider to be extensible, and that made the most sense to me. I also added an apiManager service to separate concerns a bit. Calls to blockchain's API are made from within the nodejs server since getting transactions is not allowed via CORS.

There are 4 components in the react app. 

(Main App) requires (Address Search) requires (Address Form & Address Transaction List) 


Thanks for reviewing.
