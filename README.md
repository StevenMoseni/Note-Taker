![License badge](https://img.shields.io/badge/license-MIT-green)

# Note-Taker

This is an app that can be used to write, save, and delete notes. 
This application will use an express backend and save and retrieve note data from a JSON file.

## Description


* The following HTML routes are created:

  * GET `/notes` - returns the `notes.html` file.

  * GET `/` -  returns the `index.html` file

* The application have a `db.json` file on the backend that is used to store and retrieve notes using the `fs` module.

* The following API routes created:

  * GET `/api/notes` -  reads the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - receives a new note to save on the request body, added it to the `db.json` file, and then returned the new note to the client.

  * DELETE `/api/notes/:id` -  receives a query parameter containing the id of a note to delete. When each note is saved they have got a unique `id`. In order to delete a note,  all notes is read from the `db.json` file, and removed the note with the given `id` property, and then rewrote the notes to the `db.json` file.

## User Story
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete.

```

## Table of Content
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#Licence)
4. [Contribution](#Contribution)
5. [Questions](#Questions)
6. [Technologies Used](#Technologies_Used)


## Installation
The dependencies are [express](https://expressjs.com/). Install the packages/dependencies by hitting following command on your terminal console:-
```
npm install

```


## Usage

```
Note Taker application that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

```

## License

```
This is MIT license

```

## Contribution

```
Please email me regarding any changes. 
```

# Questions
 <a href="https://github.com/StevenMoseni">Github Url : https://github.com/StevenMoseni</a>

 <a href="StevenAMoseni@gmail.com">Email : StevenAMoseni@gmail.com</a>

 ## Technologies_Used
* JavasScript
* Node.js
* Express.js
* mySQL
* npm modules
* heroku

## Links 
Deployed app: https://limitless-ridge-44234.herokuapp.com/  <br/> 
Github Page: https://github.com/StevenMoseni/Note-Taker
 <br/> 
Github Published link: https://stevenmoseni.github.io/Note-Taker/
