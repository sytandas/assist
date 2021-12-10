//chat.js file connect with the chat.html and interect with the user input - and reply accordingly 

import * as fs from 'fs'; // importing function for file handling - fs

//create file - at the time of page load/refresh 

console.log('connected');

window.onload = function file_create(){
  console.log('load');
  var fs = require('fs');
  fs.writeFile('/Users/sayantandas/fun/assist/output/newFile.txt', function (err){
    if (err) throw ere;
    console.log('Saved');
  });
}

//read file - scope ~ lexical analysis

function file_read(){
}

//writng to the file 

function file_write(){
  
}

//reply function

function reply(){
  
}

//lexical analysis 

function check(){

}

//terminating function

function terminate(){

}

function show(){
  var fs = require('fs');
  fs.openFile('/Users/sayantandas/fun/assist/output/file.txt', function (err){
    if (err) throw err;
    console.log('Open');
  });
}

