# Data Generator using the Mongoose driver

## Introduction
This programs is a tool to generate a custom type of data to a MongoDB database. This can be useful for practices or to test index performance.



## Required packages
This program requires the instalation of the following packages:

```bash
npm install mongoose express nodemon
```

You can install them using the VS Code terminal, in the comand prompt option.



## Usage
Inside the index file there is the following code:

```javascript
async function initializeData() {
    //await DataCreator(50000);
    //await DeleteData();
}
initializeData();
```

Uncomment the function that you want to execute. The "DataCreator" function creates a desired number of documents and the "DeleteData" function deletes all the data.

You can customize the schema, model and type of data you want to insert to MongoDB, by going to the "DataManagment" and "models" folders.



## Note
This is a simple program, it doesn't have the intent of being complex or something too complete, its purpose is to generate custom data.
It has its flaws, but it can be useful for the insertion of data to a collection in MongoDB. You can customize it and upgrade it freely.
