const fs = require('fs');
const readdir = require('fs/promises');
const stat = require('fs');
const path = require('path');
const folder = path.join(__dirname, 'secret-folder');
let size = [];
fs.readdir (folder, {withFileTypes: true}, (error, dirEntList) => {
  if (error) {
    throw error;
  } else {
      dirEntList.forEach ((dirEnt) => {
        fs.stat((path.join(`${folder}/${dirEnt.name}`)), (error, stats) => {
          if (error){
            throw error
          }
          else{
            console.log(`${stats['size']} bite`);
          }
          });
        console.log(`${path.parse(path.join(`${folder}/${dirEnt.name}`)).name} - ${path.extname(path.join(`${folder}/${dirEnt.name}`))}`);       
    })
  }});
