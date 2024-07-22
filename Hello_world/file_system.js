const { error } = require("console");
const fs  = require("fs");
const os = require("os");
// synchronous file creation
// fs.writeFileSync("./farwa.txt", "hey I'm Farwa khan")
// Asynchronous file creation
// fs.writeFile("./nida.dart", "nida", error => {})
//const result = fs.readFileSync("./contacts.txt", "utf-8")
//console.log(result);


 //fs.appendFileSync('./hello.js', 'farwa');

 //fs.copyFileSync('file_system.js', 'copy.txt'); 
 
 //console.log(fs.statSync('./file_system.js'))
 // to check if it is file or not
 //console.log(fs.statSync('./file_system.js').isFile())
 
 //make multiple directories using recursive functions 
 //fs.mkdirSync('./my-docs/a/b', {recursive: true}
 
 //fs.unlinkSync('./hello.js');

 //non-blocking operation
//  fs.readFile("./contacts.txt", "utf-8", (error, result) => {
//     if(error){
//      console.log(error);
//     }
//     else{
//        console.log(result);
//     }
//  })
  //console.log(os.cpus().length); // These are used to increase the length of the threads in thread pool upt to the core size of the CPU
 // blocking operation - it block operation till it is not done but Asynchronous operations or non-blocking operations don't do this 
  console.log("1");
  const result = fs.readFileSync("./contacts.txt", "utf-8");
  console.log(result);
  console.log("2");
 