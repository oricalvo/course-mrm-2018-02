const mongodb = require("mongodb");
const connect = promisify(mongodb.MongoClient.connect);

mongodb.Cursor.prototype.toArrayAsync = promisify(mongodb.Cursor.prototype.toArray);

main();

async function main() {
    console.log("Connecting");
    const client = await connect("mongodb://localhost:27017");
    console.log("Connected");

    const db = client.db("mydb");

    const contacts = db.collection("contacts");

    const docs = await contacts.find({}).toArrayAsync();

    for (const doc of docs) {
        console.log(doc);
    }

    console.log("Closing");
    client.close();
}

function promisify(fn){
    return function(){
        const args = Array.from(arguments);
        const me = this;

        return new Promise(function(resolve, reject){
            function callback(err, retVal){
                if(err){
                    reject(err);
                    return;
                }

                resolve(retVal);
            }

            args.push(callback);

            fn.apply(me, args);
        });
    }
}