const { error } = require('console');
const fs = require('fs');
const path = require('path');
const folder = path.join(__dirname, 'styles');
const array = [];
fs.readdir(folder, (err, styles) => {
  if(err) {
    throw error;
  }
  else {
    styles.forEach((style) =>{
       if(path.extname(`${folder}/${style}`) ==='.css') {
        const readStream = fs.createReadStream(path.join(`${folder}/${style}`), 'utf-8');
        fs.writeFile(path.join(folder, 'bundle.css'), `${readStream}`, (error) => {
          if(error){
            throw error;
          }
        }) 
       }
    })
  }
})