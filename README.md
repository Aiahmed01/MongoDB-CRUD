# Social Network API


Social Network API
Description
This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. The API is built using Express.js for routing, MongoDB for the database, and Mongoose as the ODM (Object Data Modeling) library. It supports various endpoints to handle user and thought data, including creating, updating, and deleting users and thoughts, adding and removing friends, and reacting to thoughts.


## Technologies Used

1- Express.js
2- MongoDB
3- Mongoose


## Installation:

1- Make sure you have MongoDB installed on your machine. 

2- Clone the repository: git clone https://git@github.com:Aiahmed01/MongoDB-CRUD.git

3 - Navigate to the project directory

4- Install the dependencies

5- Start the server:

6- The server will be running on http://localhost:3001.



## API Endpoints:

# Users API's
```
GET /api/users: Get all users.
GET /api/users/:id: Get a single user by its ID.
POST /api/users: Create a new user.
PUT /api/users/:id: Update a user by its ID.
DELETE /api/users/:id: Delete a user by its ID.
POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.
```
# Thoughts API's
```
GET /api/thoughts: Get all thoughts.
GET /api/thoughts/:id: Get a single thought by its ID.
POST /api/thoughts: Create a new thought.
PUT /api/thoughts/:id: Update a thought by its ID.
DELETE /api/thoughts/:id: Delete a thought by its ID.
POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.
```

## Walkthrough Video :  [Video](https://drive.google.com/file/d/1ebSbTMArKbuGD1Xf8jHmpZ0p9qPECTnU/view)



## Usage
You can use tools like Insomnia or Postman to test the API endpoints.

## Credits
This project was developed as part of the University of Minnesota Full-Stack Developer Bootcamp.

## License
This project is licensed under the MIT License.





