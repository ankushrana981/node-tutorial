const { readFile } = require("fs");
const util = require("util");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, success) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(success);
      }
    });
  });
};

getText("./contest/first.txt")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });


 const start = async()=>{
    try {
        const first = await getText('./contest/first.txt')
        console.log(first);
    } catch (error) {
        console.log(err);
    }
 } 