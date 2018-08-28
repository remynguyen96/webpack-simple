# Webpack-boilerplate made by Remy Nguyen
# Webpack-boilerplate 
## Overview

* **Easiest way to run a native js:** Sensible defaults & includes everything you need with minimal setup.
* **Compatible:** Works with all api servers (NodeJS, Java, PHP...) and fits seamless in your server workflow.

`Webpack-boilerplate` is based on the following libraries & tools:

* [`webpack`](https://webpack.js.org/): Performant, extensible web frontend framework

## Features

* ES6 typings
* Scss
* HTML
* Accepts `application/json` content-types
* Runs everywhere: Can be deployed via `now`, `up`, AWS Lambda, Heroku, Firebase, Digitalocean etc.


## Getting Started
***
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Install **Node LTS 8** 
  - Download: https://nodejs.org/en/download/


### Installation

  Install yarn as global packages if not ``` npm install -g yarn ```
```
    yarn install
```
*You can use npm. But I recommend usage yarn instend of npm*

### Usage
***

#### Running application

```
  yarn start
```

Server will start with port http://localhost:3000

> By default application will run on port 3000. If you want to specify port, ex: **3500** , on Windows you modify **scripts** part of **package.json** file as below:
>  - **Current**: ``` "start": "webpack-dev-server --open --port 3000" ```  
>  - **Change to**: ``` "start": "webpack-dev-server --open --port 3500" ```


#### Running the tests

```
  yarn test (Coming soon)
```

### Build

```
  yarn build
```

## Deployment with Firebase
```
  yarn deploy
```

### Heroku

To deploy your application server with [Heroku](https://heroku.com), follow these instructions:

1.  Download and install the [Heroku Command Line Interface](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) (previously Heroku Toolbelt)
2.  Log in to the Heroku CLI with `heroku login`
3.  Navigate to the root directory of your `app` server
4.  Create the Heroku instance by executing `heroku create`
5.  Deploy your app server by executing `git push heroku master`

### `up` (Coming soon)

### AWS Lambda (Coming soon)

## Help & Community

Join me. if you run into issues or have questions. I love talking to you!

<p align="center"><a href="https://oss.prisma.io"><img src="https://imgur.com/IMU2ERq.png" alt="Prisma" height="170px"></a></p>
