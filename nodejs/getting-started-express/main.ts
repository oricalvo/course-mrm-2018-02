import * as express from "express";
import {getAllContacts} from "./dal";

const app = express();

app.use(function(req, res, next){
    console.log("AAA");

    if(!req.headers["Authorization"]){
        res.json({
            error: "Not Authorized"
        });

        return;
    }

    next();
});

app.get("/api/contact", wrap(async function() {
    return await getAllContacts();
}));

function wrap(fn){
    return function(req, res) {
        try {
            const retVal = fn();

            if (retVal && retVal.then) {
                retVal.then(data => {
                    res.json(data);
                }).catch(err => {
                    res.json({error: err.message});
                });
            }
        }
        catch(err){
            res.json({error: err.message});
        }
    }
}

// app.get("/api/contact", function(req, res){
//     getAllContacts().then(contacts => {
//         res.json(contacts);
//     }).catch(err => {
//         res.status(500);
//         //res.statusMessage = err.message;
//         res.json({error: err.message})
//         res.end();
//     });
// });

app.listen(3001, function(){
    console.log("Server is running ABC");
});
