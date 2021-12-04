//chat.js file connect with the chat.html and interect with the user input - and reply accordingly 
//intially we make it simple one question to another reply format 

//TODO: machine learning algortihm to predict and implement reply(s)

import * as fs from 'fs'; // importing function for file handling - fs

//create file function

function file_create(){
  var fs = require('fs');
  fs.writeFile('/Users/sayantandas/fun/assist/output/newFile.txt', function (err){
    if (err) throw ere;
    console.log('Saved');
  });
}

//read file - scope ~ lexical analysis

function file_reder(){
}

//writng to the file 

function file_writer(){
}

//reply function

function reply(){
  
}

//lexical analysis 

function check(){

}

//terminating funciton

function exit(){

}

function show(){
  var fs = require('fs');
  fs.openFile('/Users/sayantandas/fun/assist/output/file.txt', function (err){
    if (err) throw err;
    console.log('Open');
  });
}
show();
