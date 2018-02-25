export function delay(ms){
    return new Promise((resolve, reject)=>{
       setTimeout(function(){
           try {
               throw new Error("YYY");

               // resolve();

           }
           catch(err) {
               reject(new Error("setTimeout"));
           }
       }, 1000)
    });
}