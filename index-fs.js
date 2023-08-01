import fs from 'node:fs';

// Escritura de archivo
const text = "bootcamp somoscoders"
fs.writeFile('./assets/input.txt', text, function(err) {
  if (err) {
     return console.error(err);
  }
   
  console.log("Data written successfully!");
});

// Append data to file
const data = "Espero te este gustando"
fs.appendFile('./assets/input.txt', data, 'utf8',
 
    // Callback function
    function(err) {
        if (err) throw err;
 
        //  If no error
        console.log("Data is appended to file successfully.");
});

// Asynchronous read
// Lectura de archivo
fs.readFile('./assets/input.txt', function (err, data) {
  if (err) {
     return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});

console.log("Fuera del archivo");

