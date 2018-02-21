# blockchain-code-test

## Quick Setup

* Run npm install & npm run.
* Open the app on localhost:3000 
* (optional) to run in ngrok copy and paste url from console

App runs on Node and express. Npm run will run a custom script to build the app, and open a server on public/build. On terminal you will see Gulp compiling the app. Once it's finished you will see the server in which the app is running. Go to localhost:3000 or copy and paster the ngrok address from console.

## Code Walkthrough

I'm very new to React, but wanted to take the time to build something nice. Although it's a small app, created all components in a structure that I consider to be extensible, and that made the most sense to me. I also added an apiManager service to separate concerns a bit. Calls to blockchain's API are made from within the nodejs server since getting transactions is not allowed via CORS.

There are 4 components in the react app. 

(Main App) requires (Address Search) requires (Address Form & Address Transaction List) 


Left a few TODOs due to time constraint but ideally I would've liked to create services for Utils, Socket functionality. Also would've added an AddressTransactionRow component to handle each row (transaction) in the column grid.

I also tried to build a good React, Node, ES6 configuration setup from scratch. This took a big chunk of the time for this code test.

Thanks for reviewing.
