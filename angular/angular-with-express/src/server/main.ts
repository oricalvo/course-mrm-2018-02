import * as express from "express";
import {wrapExpressApi} from './helpers';

const app = express();

app.get("/api/contact", wrapExpressApi(getAllContacts));

function getAllContacts(){
  return [
    {id: 1, name: "Ori"},
    {id: 2, name: "Roni"},
  ];
}

app.listen(3000, function(){
  console.log("Server is running");
});
