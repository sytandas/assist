//chat.js file connect with the chat.html and interect with the user input - and reply accordingly 
//intially we make it simple one question to another reply format 
//future TODO: machine learning algortihm to predict and implement reply(s)

// todo:: 
// write funtions that are doing file creation/checking 
// write function for lexical analysis and return according to the input
// write function for ouput showing 
// connect to the html page and return 2 ouput intially::  hi <-> hello && how are you <-> i'm good


//file creation function and if same file available then re-create it with different file name dd-mm-yyyy (future scope - showing detatis on page)

import * as fs from 'fs';

function file_create(){

  var fs = require('fs');
  fs.writeFile('/Users/sayantandas/fun/assist/output/newFile.txt', function (err){
    if (err) throw err;
    console.log('Saved');
  });
}

function file_reder(){
}

function file_writer(){
}

function reply(){
  
}

function check(){

}

function exit(){

}

function show(){
  var fs = require('fs');
  fs.openFile('/Users/sayantandas/fun/assist/output/file.txt', function (err){
    if (err) throw err;
    console.log('Open');
  });
}

