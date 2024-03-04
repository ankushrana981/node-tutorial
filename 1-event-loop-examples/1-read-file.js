const {readFile} =  require('fs')

console.log('Started a first task ');
// Check File path
readFile('./contest/first.txt', 'utf-8', (err, success) => {
if (err){
          console.log(err);
          return;
}
console.log(success);
console.log('completed first task');
})
console.log('starting next task');
