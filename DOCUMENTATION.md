# Codebase documentation

These documentation notes relate to the original Acebook codebase, cloned from Makers Academy. This formed the basis of the codebase for the Chaptrs web application minus any code/files relating to 'posts'. The codebase was then extended to fit the requirements of the new project and application.   

## Videos

These videos complement the docs below.

* [An overview of the app](https://youtu.be/meTABGgrO2c)
* [The backend (api)](https://youtu.be/mFczOzWW3vo)
* [Postman](https://youtu.be/VO_kinuJngA)

## Existing Features

It's already possible for a user to:
- Sign up
- Sign in
- Sign out
- View a list of posts

## Technologies

Here's an overview of the technologies used to build this template application. You don't need to do a deep dive on each one right now. Instead, try to get a feeling for the big picture and then dive into the details when a specific task pushes you in that direction.

### **M** is for MongoDB
[MongoDB](https://www.mongodb.com/) is a _NoSQL_ database program that stores data in collections of documents (in a format similar to JSON), rather than in tables. The application interacts with MongoDB using a tool called Mongoose.

### **E** is for Express
[Express](https://expressjs.com/) is the Javascript equivalent of Flask (Python) or Sinatra (Ruby). The structure of this application will feel quite different to what you're used to but the principles are the same.

### **R** is for React
[React](https://reactjs.org/) is a hugely popular tool that is used to build engaging front ends. The basic principle is that the front end is split up into _components_, each of which _could_ include some logic, template structure (HTML) and styling (CSS).

### **N** is for Node
Java script was originally designed to run exclusively in browsers, such as Chrome. [Node](https://nodejs.org/en/) is a tool that allows you to run Javascript outside the browser and its invention made it possible to build full stack Javascript apps.

We also used...

- [Jest](https://jestjs.io/) for unit testing on the back end
- [Cypress](https://www.cypress.io/) for end-to-end testing and component testing, on the front end
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [Handlebars](https://handlebarsjs.com/) for the `home` template.
- [ESLint](https://eslint.org) for linting.
- [Nodemon](https://nodemon.io/) to reload the server automatically.

## Architecture

This application is comprised of two distinct pieces:

- A backend API built with Express
- A front end built with React

It's important to note that these are two completely different programs. They don't share any code. They have their own `package.json` and dependencies. Imagine that they're always running on two different machines (though when you are working locally, everything is running on your computer).

The only way the frontend can communicate with the API is through HTTP requests on the network. The React front end sends HTTP requests to the backend API and receives JSON in response body, rather than a whole page of HTML.

For example, the React front end would send this request to retrieve the entire `Post` collection.

```
GET "/posts"
```

And the body of the response would look like this.

```
{
    "posts": [
        {
            "_id": "62f8ef0e6c1ffcf74cbbb181",
            "message": "Hello, this is my first Acebook post!",
            "__v": 0
        },
        {
            "_id": "62f8ef366c1ffcf74cbbb188",
            "message": "Welcome to Acebook! Have an Acetime :)",
            "__v": 0
        },
        {
            "_id": "62f8f08af1cffef85a7426ae",
            "message": "Thank you :D",
            "__v": 0
        }
    ]
}
```

Here's a diagram of the above
<br>
<br>
![a diagram of the MERN stack](./diagrams/mern_stack.png)
<br>
<br>

Once received by the React FE, the JSON in the response body is used to render a list of posts on the page.

![response body mapped onto a page](./diagrams/response_parsing.png)

This architectural pattern is quite popular because it allows teams to build multiple front ends, all of which use the same backend API. You could, for example, go on to build a mobile app without needing to create another backend API.
## Authentication

Up until now, if you've implemented authentication, it will likely have been done using sessions - this is a useful point of comparison but, if you haven't implemented authentication yet, that's not going to impede you right now.

Here's the authentication flow for this application

1. A registered user submits their email address and password via the React front end.
2. The Express backend receives the data and tries to find a user in the DB with the same email address.
3. If a user is found, the password in the database is compared to the password that was submitted.
4. If the passwords match, a JSON Web Token is generated and returned, as part of the response.
5. The React front end receives the token and holds on to it.
6. Every request to `"/posts"` must include a valid token (which is checked by the backend).
7. When the user logs out, the front end discards the token.

![authentication flow diagram](./diagrams/auth_flow.png)

### What is a JSON Web Token?

A JSON Web Token, or JWT, is a token that comprises three parts

- A header, which contains information about how the token was generated.
- A signature, which is used to verify the token.
- A payload, which you can use to store some **non-sensitive data** like a user id. Note that the payload is not secure and can be decoded very easily.

The signature is created using a 'secret', which must be kept private (i.e. not put on GitHub) otherwise nefarious internet users could start to issue tokens for your application.

Here, we've used an environment variable called `JWT_SECRET`, which you'll see used in the commands to start the application and run the tests (in the README). You can change the value of that environment variable to anything you like, as long as it's hard to guess. It should also _never_ be committed in your project files.


<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Facebook-mern-template&prefill_File=DOCUMENTATION.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Facebook-mern-template&prefill_File=DOCUMENTATION.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Facebook-mern-template&prefill_File=DOCUMENTATION.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Facebook-mern-template&prefill_File=DOCUMENTATION.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Facebook-mern-template&prefill_File=DOCUMENTATION.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
