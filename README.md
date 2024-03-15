# PollingAPI
API for Polling Questions 


## Required Routes
- /questions/create (To create a question)
- /questions/:id/options/create (To add options to a specific question)
- /questions/:id/delete (To delete a question)
- /options/:id/delete (To delete an option)
- /options/:id/add_vote (To increment the count of votes)
- /questions/:id (To view a question and it’s options)

## steps to run app
- clone the repo : https://github.com/rishabh200012/Polling-Api
- install packages using command: npm i
- start server using command: nodemon server.js
