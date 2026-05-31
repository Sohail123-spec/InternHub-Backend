# InternHub Backend API

## Overview

InternHub is an Internship Management Portal built using Node.js, Express.js, and MongoDB. It provides RESTful APIs for managing internship records.

## Features

* Create Intern
* View All Interns
* View Single Intern
* Update Intern
* Delete Intern
* MongoDB Database Integration
* Mongoose Validation
* Error Handling
* Request Logging using Morgan

## Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Morgan
* Dotenv

## Installation

1. Clone the repository

2. Install dependencies

npm install

3. Configure environment variables

Create a .env file

PORT=5000

MONGO_URI=your_mongodb_connection_string

4. Run the server

npm run dev

## API Endpoints

GET /api/interns

GET /api/interns/:id

POST /api/interns

PUT /api/interns/:id

DELETE /api/interns/:id

## Author

MD Sohail Ahmed
