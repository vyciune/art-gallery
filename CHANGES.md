### Register / Log in 

To use login/register functionality, just needed to:
* add .env file in project root 
* adjust the env properties to start with REACT_APP_

#### The REACT_APP_ Prefix:

* Create React App (CRA) has built-in support for environment variables through .env.
* CRA only exposes variables that start with REACT_APP_ to JavaScript code.
* MirageJS is simulating backend within the browser, it can access any environment variables 
that are available to React application.