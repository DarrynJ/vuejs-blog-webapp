import * as functions from "firebase-functions";
import * as firebase from "firebase-admin";
import * as express from "express";

//
// Initialize the firebase application to allow connection to database
const firebaseApp = firebase.initializeApp(functions.config().firebase);

//
// Create a function that retrieves data from your firestore collection
async function getPosts() {
  const postsCollection = firebaseApp.firestore().collection("posts");

  return postsCollection.get().then((snap) => snap.docs.map((d) => d.data()));
}

//
// Initialize your server
const server = express();

//
// Map your end-point to retrieve some data
server.get("/posts", (request, response) => {
  //
  // Set your header values here, for example Cache-Control
  response.set("Cache-Control", "public, max-age=300, s-maxage=600");

  //
  // Execute your get from here to retrieve your data from your firebase database
  getPosts().then((result) => {
    // Return your data in json for example
    response.json(result);
  });
});

//
// Handle your functions requests by passing in your server instance
export const app = functions.https.onRequest(server);
