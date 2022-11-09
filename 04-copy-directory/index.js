const fs = require('fs');
const path = require('path');
const { error } = require('console');

(function copyDir () {
  const folder = path.resolve(__dirname, 'files');
  const copyfolder = path.resolve(__dirname, 'files-copy');
  try {
    fs.rm (copyfolder, {recursive: true, force: true}, ()=> {
      fs.mkdir(path.join(__dirname, 'files-copy'), () => {
        fs.readdir(folder, {withFileTypes: true}, (error, files) => {
          if(error) {
            throw error;
          }
            files.forEach((file) => {
              if(file.isFile()) {
                fs.copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name), (error) => {
                  if(error) {
                    throw error;
                  }
                });
              }
            });
          });
        });
      });
    } 
      catch(err) { 
        console.log(err)
      }
  })();
