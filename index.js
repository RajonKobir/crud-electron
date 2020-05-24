// including required built-in modules
const fs = require('fs');
const path = require('path');


// putting the fields into variables
btnCreate = document.getElementById('btnCreate');
btnRead = document.getElementById('btnRead');
btnUpdate = document.getElementById('btnUpdate');
btnDelete = document.getElementById('btnDelete');
fileName = document.getElementById('fileName');
fileContents = document.getElementById('fileContents');
notification = document.getElementById('notification');


// defining path
// let pathName = path.join(__dirname, 'Files');
let pathName = path.join(require('os').homedir(), 'Desktop');

// make the directory
// fs.mkdir('pathName', () => {});


// Create Operation
btnCreate.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value;
    fs.writeFile(file, contents, function(err){
        if(err){
            // return console.log(err);
            notification.innerHTML = err;
        }
        notification.innerHTML = "The file was created!";
    });
});


// Read Operation..
btnRead.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)
    fs.readFile(file, function(err, data){
        if(err){
            // return console.log(err);
            notification.innerHTML = err;
        }
        fileContents.value = data;
        notification.innerHTML = "The file was read!";
    });
});


// Update Operation
btnUpdate.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value;
    fs.writeFile(file, contents, function(err){
        if(err){
            // return console.log(err);
            notification.innerHTML = err;
        }
        notification.innerHTML = "The file was updated!";
    });
});


// Delete Operation
btnDelete.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)
    fs.unlink(file, function(err){
        if(err){
            // return console.log(err);
            notification.innerHTML = err;
        }
        fileName.value = '';
        fileContents.value = '';
        notification.innerHTML = "The file was deleted!";
    });
});








