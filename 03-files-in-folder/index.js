const fs = require('fs');
const readdir = require('fs/promises');
const stat = require('fs');
const path = require('path');
const folder = path.join(__dirname, 'secret-folder');
fs.readdir (folder, {withFileTypes: true}, (error, dirEntList) => {
  if (error) {
    throw error;
  } else {
      dirEntList.forEach ((dirEnt) => {
        if(!dirEnt.isDirectory()) {
        fs.stat((path.join(`${folder}/${dirEnt.name}`)), (error, stats) => {
          if (error){
            throw error
          }
          else{
            console.log(`${path.parse(path.join(`${folder}/${dirEnt.name}`)).name} - ${path.extname(path.join(`${folder}/${dirEnt.name}`)).replace('.', '')} - ${stats['size']} bite`); 
          }
          });
              
    }});
}});
