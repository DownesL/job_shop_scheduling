# Getting Started with this React app

##Installation

Open your terminal in the project root

Execute:\
`npm install`\
then to start the app: \
`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##What does this app do?

The main table randomly generates values (=process times) for the jobs \
on each machine.

The Buttons allow you to add/subtract jobs. \
(The machine buttons are in place, but don't work yet)

The './srs/logic/index.js' file automatically computes the\
most efficient sequence for the job times seen in the main table\ 
This most efficient sequence is calculated using [Johnson's Rule](https://en.wikipedia.org/wiki/Johnson%27s_rule) \
for the [Flow Shop Problem](https://en.wikipedia.org/wiki/Flow-shop_scheduling). 
