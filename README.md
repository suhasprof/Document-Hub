# Document Hub
## Project Components
### Client-side (Frontend)
React: A JavaScript library for building user interfaces.
Quill: A rich text editor that provides the editing interface.
Socket.io: A library for real-time bidirectional communication between web clients and servers.
React Router: A library for routing in React applications, enabling navigation between different pages or views.
### Server-side (Backend)
#### Node.js: A JavaScript runtime for building scalable network applications.
#### Express: A web application framework for Node.js.
#### Socket.io: To handle real-time events and updates.
#### MongoDB: A NoSQL database for storing document data.
### Project Architecture
Client-Server Communication:

The client and server communicate in real-time using Socket.io.
When a user makes changes to the document in the text editor, these changes are emitted to the server via Socket.io.
The server broadcasts the changes to all other connected clients to update their views in real-time.
Document Persistence:

Each document has a unique ID.
When changes are made to a document, the server saves the updated content to MongoDB.
On page refresh or reloading the document, the client requests the document data from the server using the document ID.
The server retrieves the document data from MongoDB and sends it back to the client for rendering
