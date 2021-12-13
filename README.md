# pizzashop
A group project for the Bitcoin team

![](https://user-images.githubusercontent.com/68837083/145735808-5fd53e39-6e66-40b1-9f02-3631d06b1387.png)
## Deployment on Heroku
https://pizzashop-dev.herokuapp.com/
## Software design in Miro
https://miro.com/app/board/uXjVObAhp-U=/
## Main features
1. Make an order of pizza
1. Change the status of pizza orders
## Stretches
1. Delete an existing order
1. Create tests
## Development guide
1. Clone the dev branch
1. Run `npm i`
1. Run `npm knex migrate:latest`
1. Run `npm knex seed:run`
1. Run `npm run dev` to start the server 
1. Go to http://localhost:3000 to see if the app is running properly
1. Make a new branch named after your name
1. Make changes
1. Commit the changes and push to your named branch
1. Make a pull request from your named branch to the dev branch
## Testing
1. Run `npm test`
## Git workflow and deployment
1. Testing will be done on the dev branch
1. After all the tests pass, it will be deployed to the Heroku server
1. After the development finished, the dev branch will be merged to the main branch
