import * as express from "express";
import {promisify, wrapExpressApi} from './helpers';
import * as mongodb from "mongodb";

const connect: (url: string)=>Promise<any> = promisify(mongodb.MongoClient.connect);
mongodb["Collection"].prototype.insertManyAsync = promisify(mongodb["Collection"].prototype.insertMany);
mongodb.Cursor.prototype["toArrayAsync"] = promisify(mongodb["Cursor"].prototype.toArray);

const app = express();
let client;
let db;

main();

async function main(){
  client = await connect("mongodb://localhost:27017");
  db = client.db("contactdb");

  app.get("/api/contact", wrapExpressApi(getAllContacts));

  app.listen(3000, function(){
    console.log("Server is running");
  });
}

async function getAllContacts() {
  const coll = db.collection("contacts");
  const contacts = await coll.find({}).toArrayAsync();
  return contacts;
}

