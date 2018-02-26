const path = require("path");
const fs = require("fs");
const child_process = require("child_process");
const {promisify} = require("./helpers");
const mongodb = require("mongodb");

const readFile = promisify(fs.readFile);
const connect = promisify(mongodb.MongoClient.connect);
mongodb.Collection.prototype.insertManyAsync = promisify(mongodb.Collection.prototype.insertMany);
mongodb.Cursor.prototype.toArrayAsync = promisify(mongodb.Cursor.prototype.toArray);

async function dev(){
  try {
    await runMongo();

    await fillMongo();

    await spawn("node_modules\\.bin\\tsc", ["-p", "src/server/tsconfig.json"], {
      validateExitCode: true,
    });

    spawn("node_modules\\.bin\\nodemon", ["server_out/main.js"]);

    spawn("ng", ["serve", "--open", "--proxy-config", "proxy.conf.json"]);

    spawn("node_modules\\.bin\\tsc", ["-p", "src/server/tsconfig.json", "-w"]);
  }
  catch(err){
    console.error(err);
  }
}

async function fillMongo() {
  const initialJsonFilePath = path.resolve(__dirname, "../../db/initial.json");
  const initialContacts = JSON.parse(await readFile(initialJsonFilePath, "utf8"));

  console.log("Connecting to mongo");
  const client = await connect("mongodb://localhost:27017");

  const db = client.db("contactdb");
  const coll = db.collection("contacts");

  console.log("Checking data is present inside db");
  const contacts = await coll.find({}).toArrayAsync();
  if (contacts.length == 0) {
    console.log("Filling initial data from " + initialJsonFilePath);
    await coll.insertManyAsync(initialContacts);
  }
  else {
    console.log("Data is already present inside database")
  }

  client.close();
}

async function runMongo(){
  const mongoPath = process.env.MONGO_PATH;
  if (!mongoPath) {
    throw new Error("MONGO_PATH is empty")
  }

  const mongoExe = path.resolve(mongoPath, "bin/mongod");
  const mongoData = path.resolve(__dirname, "../../db");

  await spawn(mongoExe, ["--dbpath", mongoData]);
}

function spawn(app, args, options) {
  return new Promise((resolve, reject) => {
    const o = {
      shell: true,
      stdio: "inherit",
    };

    if (options) {
      Object.assign(o, options);
    }

    const p = child_process.spawn(app, args, o);

    if (o.validateExitCode) {
      p.on("close", function (exitCode) {
        if (exitCode != 0) {
          reject(app + " failed with exist code " + exitCode);
          return;
        }

        resolve();
      });
    }
    else {
      resolve();
    }

    p.on("error", function (err) {
      reject(err);
    });
  });
}

exports.dev = dev;
