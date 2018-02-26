export function wrapExpressApi(fn){
  return function(req, res) {
    try {
      const retVal = fn();

      if (retVal) {
        if(retVal.then) {
          retVal.then(data => {
            res.json(data);
          }).catch(err => {
            res.json({error: err.message});
          });
        }
        else {
          res.json(retVal);
        }
      }
    }
    catch(err){
      res.json({error: err.message});
    }
  }
}

export function promisify(fn): any {
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
