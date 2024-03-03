const { readFile, writeFile, writeFileSync } = require("fs");

console.log('Start');
readFile("./contest/first.txt", "utf-8", (err, success) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = success;
  readFile('./contest/second.txt','utf-8',(err,success)=>{
          if (err){
                console.log(err)
                return
          }
          const second = success;

          writeFile('./contest/result.txt',`Here is the result:${first} ${second}`,(err, result)=>{
                    if(err){
                              console.log(err);
                              return
                    }
                    console.log('Done with this task');
          });
  })
})

console.log('Restrat session');