/*
A huge portion of the internet's data travels over HTTP/HTTPs through #request-response cycles between [clients and servers]/
Everytime that you use a website, your browser sends requests to one or many servers requesting resources.
Every image, mem, post and video is requested by a client and sent in response from a server.

Extress is a powerful but flexible JavaScript framework for creating web servers and APIS.
It can be used for everything from simple static files to JSON APIs to full production servers.

In this lesson you will be fixing a machine called Express Yourself in the browser.
The machine is supposed to provide functionality for clients to interact with various Expressions: JavaScript objects each containing ID's, names and emojis.
Curriently, it looks nice but nothing works since there is no server in place!
You will be learning all the necessary skills to implement an API allowing clients to Create, Read, Update and Delete Expressions.
These four functionalities together are known as CRUD, and they form the backbone of many real-life APIs.

            EXPRESS Y🤪URSELF

   ┌────────┬────────┬────────┬────────┐
   │  GET   │ CREATE │ UPDATE │ DELETE │
   └────────┴────────┴────────┴────────┘
            │
            ▼
      ┌───────────────────┐
      │   Client / Front  │
      │   End Interface   │
      └───────────────────┘
            │
            ▼
      ┌───────────────────┐
      │     Routing       │
      │   (Express.js)    │
      └───────────────────┘
            │
            ▼
      ┌───────────────────┐
      │ Controller Logic  │
      │  (Business Rules) │
      └───────────────────┘
            │
            ▼
      ┌───────────────────┐
      │   Data / Storage  │
      │   Layer (Array)   │
      └───────────────────┘
            │
            ▼
   ┌───────────────────────────┐
   │    REFRESH EXPRESSIONS    │
   └───────────────────────────┘
*/
