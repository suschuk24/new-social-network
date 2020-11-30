# The New Social Network

## Description:

![License](https://img.shields.io/badge/License-MIT-blue.svg "License Badge")

This is a noSQL database using MongoDB that allows for API endpoints to interact with the database. Since this database is designed for a social networking platform, the database contains API endpoints for Users, their thoughts, and their friends' reactions to those thoughts.


# Table of Contents 

- [Repository](#repository)
- [Walkthrough Video](#walkthrough%20video)
- [Example Screenshots](#examples)
- [Usage](#usage)
- [User Story](#user%20story)
- [Acceptance Criteria](#Acceptance%20criteria)
- [Contributions](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
- [Technologies Used](#languages)

## Repository: 
- [My Github Profile](https://github.com/suschuk24)

- [This Repository](https://github.com/suschuk24/new-social-network)

## Walkthrough Video
![walkthrough video]()
## Examples
* User Object:
* API Route: GET /api/users/:id
* NOTE: performing a GET request without ```:id``` results in a find all query

``` JSON
{
  "thoughts": [],
  "friends": [],
  "_id": "5fc3cf42f6aad9287cce9266",
  "username": "walkthrough",
  "email": "walkthrough@test.com",
  "friendCount": 0
}
```

* Thought Object:
* API Route: GET /api/thoguhts/:id
* NOTE: performing a GET request without ```:id``` results in a find all query

``` JSON
{
  "_id": "5fc3cf89f6aad9287cce9268",
  "username": "walkthrough",
  "thoughtText": "This walkthrough is really easy!",
  "createdAt": "Nov 29th, 2020 at 10:42 am",
  "reactions": [
    {
      Reaction Object Elements
    }
  ],
  "reactionCount": 1
}
```
* Reaction Object: 
``` JSON
{
        "_id": "5fbd96361c16e50154ffc1e0",
        "reactionBody": "What a Reaction!",
        "username": "test",
        "reactionId": "5fbd96361c16e50154ffc1e1",
        "createdAt": "Nov 24th, 2020 at 17:24 pm",
        "id": "5fbd96361c16e50154ffc1e0"
      }
```

* Complete User Object with Associated array of thought objects, associated array of reaction objects to the thought objects, friend count and reaction count:
``` JSON
{
    "thoughts": [
      {
        "_id": "5fc2b0fca5ea67208c8e7d32",
        "username": "suschuk24",
        "thoughtText": "Testing a new thought today...",
        "createdAt": "Nov 28th, 2020 at 14:20 pm",
        "reactions": [
          {
            "_id": "5fc2b2c0a5885d30d4233750",
            "username": "suschuk24",
            "reactionId": "5fc2b2c0a5885d30d4233751",
            "createdAt": "Nov 28th, 2020 at 14:27 pm",
            "id": "5fc2b2c0a5885d30d4233750"
          }
        ],
        "reactionCount": 1
      }
    ],
    "friends": [
      "5fbd877029c6e94898676e20",
      "5fbd9a93ba620b19e83721a4",
      "5fbd86c473c1e819a0b75d33"
    ],
    "_id": "5fbd86c473c1e819a0b75d33",
    "username": "suschuk24",
    "email": "suschuk24@test.com",
    "friendCount": 3
  }
```
## Usage:

This database gives API endpoints for databse interaction with a soecial networking site. 

## User Story: 

* AS A social media startup
* I WANT an API for my social network that uses a NoSQL database
* SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria: 

* GIVEN a social network API
* WHEN I enter the command to invoke the application
* THEN my server is started and the Mongoose models are synced to the MongoDB database
* WHEN I open API GET routes in Insomnia Core for users and thoughts
* THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
* THEN I am able to successfully create, update, and delete users and thoughts in my database
* WHEN I test API POST and DELETE routes in Insomnia Core
* THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## License:
For more information about licenses, please visit:
[License](https://opensource.org/licenses/MIT)

## Contributing:

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)

Seth Uschuk


## Tests:

Testing completed using InsomniaCore, Checked for typos and bugs


## Technologies Used:

* JavaScript
* Node
* Express
* Mongoose


## Questions:


If you have any questions, please see my GitHub Page, or feel free to reach out by email:

-[GitHub's Guide to a Professional README](https://github.com/coding-boot-camp/potential-enigma/blob/master/readme-guide.md)


- [My Github Profile](https://github.com/suschuk24)

- [This Repository](https://github.com/suschuk24/new-social-network)

- [My Email](test@gmail.com)

  