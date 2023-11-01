const fs = require('fs');


const filePath = 'newfile.txt';


const dataToWrite = 'HI there';


fs.writeFile(filePath, dataToWrite, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
    return;
  }

  console.log('File creation and writing successful!');

  
  fs.readFile(filePath, 'utf8', (readErr, dataRead) => {
    if (readErr) {
      console.error('Error reading the file:', readErr);
      return;
    }

    console.log('File content:');
    console.log(dataRead);
  });
});
