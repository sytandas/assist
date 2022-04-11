console.log('connected');

setTimeout(function(){
  window.location.href = '/Users/sayantandas/fun/assist/index.html';
}, 50000); //TODO right not it set to 50 sec 

// write into the file
/*
function WriteToFile(){
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var test = document.getElementById("textArea").innerText;
  var s = fso.CreateTextFile("output/"+file+".txt", true);
  s.WriteLine(text);
  s.close();
}
*/
// button action to write text area document to the file 

function saveTextContent(){
  const fs = require('fs');
  var store = document.getElementsById("textArea").innerHTML;
  var data = document.getElementById("textArea").innerText;
  fs.writeFile("output/"+file+".txt", data, (err) => {
    if (err)
      throw err;
  })
}


