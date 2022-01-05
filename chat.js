console.log('connected');

// TODO - every time it's open create a file[date/time of creation] - enter i/p data to the file as "Human: ..." 

/*
document.getElementById('inputfile').addEventListener('change', function() {
  var fr = new FileReader();
  fr.onload=function(){
    document.getElementById('output').textContent=fr.result;
  } 
  fr.readAsText(this.files[0]);
})

//var pg = require('pg'); // connect postgredb

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

*/

function saveTextContent() {
  var textToWrite = document.getElementById('chatInput').value;
  document.getElementById('saveinput').value = txt;
  document.forms['aForms'].submit();
  var fileNameToSaveAs = 'output/file.txt';
  
}
  /*

  var downloadLink = document.createElement('a');
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innterHTML = 'Download File';

  if (window.webkitURL != null){
    // chrome allows the link to be clicked without actually adding it to the DOM

  downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM before it can be clicked
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}

var button = document.getElementById('send');
button.addEventListener('click', saveTextContent);

function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}
*/


