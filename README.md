##Evaluate a News Article with Natural Language Processing

This project aims to build a web tool that allow users to run Natural Language Processing
(NLP) on articles or blogs founds on other websites.

1.Make sure Node and npm are installed from the terminal.
2.Move to the project folder(cd <project directory>).
3.Clone the repo(git clone <repo>).
4.Install npm(npm i).
5.Install loaders and plugins.
6.Sign up for an API key from meaningcloud.com.
7.Configure environment variables using dotenv package:
*npm install dotenv.
*Create a new .env file in the root of the project.
*Fill the .env file with variable named API key,and paste your API key on it.
8.Start the project by follwing commend:
*npm run build-prod(to build project).
*npm start(to run project).
9.Open browser at http://localhost:8081/
10.Make testing with jest and should pass all tests by type (npm run test).
11.Add service workers:
*Require('workbox-webpack-plugin') in webpack.prod.js.
*This service is called from index.html file. 