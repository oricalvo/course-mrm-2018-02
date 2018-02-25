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
