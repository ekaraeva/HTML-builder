const fs = require('fs');
const path = require('path');
const readLine = require('readline');
const filePath = path.join(__dirname, 'text.txt');
let exit = 'exit';
const rl = readLine.createInterface({input: process.stdin, 
                                     output: process.stdout});
rl.question('Write messege: \n', (userInput) => {
  
  if (userInput.trim() == exit) {
    rl.close();
  }
  else { 
    rl.setPrompt('Try again \n');
    rl.prompt();
    
    fs.writeFile(filePath,`${userInput}`, err => {
      
      if (err) {
        throw err;
      }

    });

    rl.on('line', (userInput) => {

      if(userInput.trim() == exit) {
        rl.close();
      }  else {
        rl.setPrompt('Please try again \n');
        rl.prompt();
        
        fs.appendFile(filePath,`${userInput} \n`, err => {
          
          if (err) {
            throw err;
          }
        });
      }
  });
}
});

rl.on('close', () => {
  console.log('Thanks');
});
