
console.log('connected');

document.getElementById('inputfile').addEventListener('change', function() {
  var fr = new FileReader();
  fr.onload=function(){
    document.getElementById('output').textContent=fr.result;
  }
  fr.readAsText(this.files[0]);
})








/*
import * as fs from 'fs'; // importing function for file handling - fs

//create file - at the time of page load/refresh 


window.onload = function file_create(){
  console.log('load');
  var fs = require('fs');
  fs.writeFile('/output/newFile.txt', function (err){
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
  fs.openFile('/output/file.txt', function (err){
    if (err) throw err;
    console.log('Open');
  });
}
*/

