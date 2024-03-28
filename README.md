## Node.js Express & MongoDB: CRUD Rest APIs

### Install MongoDB: If you haven't already installed MongoDB, you can do so using Homebrew, a popular package manager for macOS. Open Terminal and run the following command:
```
brew tap mongodb/brew
brew install mongodb-community
```

### This will install MongoDB Community Edition on your system.


## Start MongoDB: Once MongoDB is installed, you can start the MongoDB server by running the following command in Terminal:
```
brew services start mongodb/brew/mongodb-community
```

### This command will start the MongoDB server in the background.


## Verify MongoDB is running: You can verify that MongoDB is running by checking the output of the following command:
```
brew services list
```
### You should see mongodb-community with a status of started.

## Connect to MongoDB: You can now connect to MongoDB using the MongoDB shell or through your application. The default MongoDB URI for a local server is mongodb://127.0.0.1:27017.

## Run RecipeHubBackend Instructions
```
npm install
```

### Run Node server
```
node server.js
```
### Run Mongo DB Server (Don't repeat this step if you already did in top)
```
brew services start mongodb/brew/mongodb-community