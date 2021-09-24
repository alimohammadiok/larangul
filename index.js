const { exec } = require("child_process");
const readline = require("readline");
const fs = require('fs');


// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("What is your Larave version ? ", function(laraVersion) {
//     rl.question("Which Angular version do you want to convert to ? ", function(anguVersion){
       
//         console.log(`lara version is ${laraVersion} and the Angular version is ${anguVersion}`);

//         rl.close();
//     });
// });
// rl.on("close", function() {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });

async function askTheQuestions(callback) {
    const questions = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    questions.question("What is your Larave version ? ", function(laraVersion) {
        questions.question("Which Angular version do you want to convert to ? ", function(anguVersion){
            console.log(`lara version is ${laraVersion} and the Angular version is ${anguVersion}`);
            questions.close();
        });
    });
    callback;
}

async function processLineByLine() {
    const fileStream = fs.createReadStream('larapost/routes/web.php');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
  
    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      console.log(`Line from file: ${line}`);
    }
  }
function digTheRoutes()  {
    fs.readFile('larapost/routes/web.php', function(err, data) {
        if(err) throw err;
        var fileContent = data.toString();
        var posArray = [];
        let i = 0;
        while(i < fileContent.length) {
            pos = fileContent.indexOf('Route', i);
            if(pos>0) {
                posArray.push(pos);
                
            }
            i+=pos;
        }
       
       
        console.log(posArray+'and the array length is'+ fileContent.length)
    });
}
 digTheRoutes();
   