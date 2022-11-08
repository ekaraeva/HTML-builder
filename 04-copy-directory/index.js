const fs = require('fs');
const path = require('path');
const mkdir = require('fs');
const copyFile = require('fs');
const { error } = require('console');
const folder = path.join(__dirname, 'files');

function copyDir () {
  fs.mkdir(path.join(__dirname, 'files-copy'),{recursive: true}, (error) => {
    if(error) {
      throw error;
    }
    console.log('folder added')
  })
  fs.readdir(folder, (error, files) => {
    if(error){
      throw error;
    }
    else{  
    files.forEach((file) => {
        fs.promises.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file));
    })

}})
  
  }
  copyDir();

  



