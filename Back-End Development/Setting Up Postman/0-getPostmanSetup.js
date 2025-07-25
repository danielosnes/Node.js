/*
Setting up Postman

Get Postman setup on your computer so that you can start testing API requests with ease.

The Postman App

Postman is a GUI that aids int he development of APIs by making it easy to test requests and their responses in an organized way.
Everything you can do in Postman you can also do through the command line. 
But postman makes the process quicker and easier by providing a clean interface and powerful set of tools.

DOWNLOAD/INSTALLATION
You can download the app for free at https://www.getpostman.com/ 
Choose the package for your OS and then unzip to install.

SETTING UP OUR EXAMPLE BACKEND
We have created a simple backend that you can interact with to get comfortable with making HTTP requests.
This backend uses SQLite database to store users.
Each user has only a username (string) and a password (string).
For now we only have the GET and POST requests set up

FOLLOW THESE STEPS TO GET THE EXAMPLE BACKEND SET UP
1 - download the example backend directory here https://content.codecademy.com/courses/apis/example_backend.zip?_gl=1*1tgh0vn*_ga*Njc3OTA4MDkxOC4xNzQ5NTg1MDU0*_ga_3LRZM6TM9L*czE3NTM0NzAzODMkbzU1JGcxJHQxNzUzNDc1MTM2JGo1NSRsMCRoMA..
2 - unzip the file
3 - Navigate to the directory through your command line (use cd example_backend) from whichever directory you unzipped it into
4 - Make sure you have Node installed.
To check, you can run npm -v on your command line
If you see a version number - you have Node
If the npm command is not found you should install Node.
5 - run npm install from inside the example_backend dir to install all of the project's dependencies
If you run into any npm or gyp errors - try running the following commands to update and re-install any npm packages:
npm install -g npm-check-updates
npm-check-updates -u
npm install
6 - to start the server run node server.js from inside the example_backend directory - now this simple server should be running at
http://localhost:4000

Next we'll see how to interact with this server using Postman

MAKING GET REQUESTS WITH POSTMAN

with the example backend running at localhost:4000 open the Pastman App
You should see an interface that looks like this:
https://content.codecademy.com/courses/apis/postman-article/postman-interface.png
At the top of the window you can see a dropdown that lets you choose what kind of HTTP operation to perform.
By default, it is set to GET 
If you expand the dropdown you will see all of the possible HTTP methods you can use to interact with this system.
https://content.codecademy.com/courses/apis/postman-article/requests-dropdown.png
To see all of the users that are currently in the database, make a GET request to localhost:4000/users
to do this you should
1. Make sure the dropdown is set to GET
2. Enter the URL localhost:4000/users in the textbox that says enter request url

When you have entered this information, press the Send button:
https://content.codecademy.com/courses/apis/postman-article/send-get-request.png
The body of the response will appear in the panel at the bottom of the window.
You should see two users stored each with a unique id:
{
    "users": [
        {
            "id": 1,
            "username": "1lameuser",
            "password": "secret_password"
        },
        {
            "id": 2,
            "username": "cool_user_87",
            "password": "notPassword!"
        }
   ]
}
This tells us that there are currently two users stored in the database.
One has a username with the value "1lameuser" and a password with the value "secret_password."
the other username has the value "cool_user87" and a password with the value "notPassword!"

We can also GET a speecific user by specifying an id in the URL of the GET request.
To get the user "1lameuser" for example, we can send this GET request:
localhost:4000/users/1
The response to this request should be:

{
    "user": {
        "id": 1,
        "username": "1lameuser",
        "password": "secret_password"
    }
}

These GET requests only retrieved resources from the server.
No information was changed.
Next we'll look at how to use Postman to send requests to add users to the system.

MAKING POST REQUESTS WITH POSTMAN
We can use POST requests to add users to the database. let's practice with sending some POST requests
1 - change the type of request from GET to POST using Postman's dropdown menu selector
2 - Add the request URL (localhost:4000/users) in the approriate textbox
3 - In order to create a new resource in this database,
we need to supply a user object in the body of the POST request.
Select the "body" tab and checl the "raw" radio button to specify input.
4 - the type of input should be a JSON object, so select the dropdown that says "Text" and change it to "JSON (application/json)":
https://content.codecademy.com/courses/apis/postman-article/request-body-type.png
5 - In the text input field underneath the radio buttons type in whatever user object you want to add.
For a valid POST request for this server, you should include JSON in the request body that has this format:
{"user": {"username":<String>, "password":<String>}}
Here is an example of what the interface will look lik ebefore you send the request:
https://content.codecademy.com/courses/apis/postman-article/post-request.png
6 - Press the Send button to send the POST request
Look at the output. 
What is contained in the response body?
Is this what you would expect?
For the above example, the output in the response body looks like:
{
    "user": {
        "id": 3,
        "username": "wholeNewUser",
        "password": "IllNeverTell"
    }
}
    This response means that a user with the username "wholeNewUser", password "IllNeverTell" and id 3 was added to the users resource.

MORE PRACTICE WITH REQUESTS
Let's try sending some more requests
1 - add a user to the system withy our first name (as a String) as the username and your last name (as  a STRING) as the password.
Use POST to do this, with a user object in the body as a JSON
2 - look at all the users contained in the user resource now.
Use a GET request to do this.
Rretrieve the user with id 4 only.
Use a GET request with a specified id to do this.

Great work! You can use postman to make requests and see the corresponding responses.
This will be very helpful in testing and understanding the APIs you build.
*/