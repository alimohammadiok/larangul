const { exec } = require("child_process");
const readline = require("readline");

let laraVersionlaravelVersion;
let angularVersion;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your Larave version ? ", function(laraVersion) {
    rl.question("Which Angular version do you want to convert to ? ", function(anguVersion){
       
        console.log(`larave version is ${laraVersion} and the Angular version is ${anguVersion}`);

        rl.close();
    });
});


exec('ls -la /', (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      console.log('hata mi var?')
      return;
    }
  
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});


rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});