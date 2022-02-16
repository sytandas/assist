console.log('connected');

// function for refresing page every 5 sec

setTimeout(function(){
  window.location.href = '/Users/sayantandas/fun/assist/chat.html';
}, 50000); //TODO right not it set to 50 sec 

// write into the file

function WriteToFile(){
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var test = document.getElementById("textArea").innerText;
  var s = fso.CreateTextFile("output/"+file+".txt", true);
  s.WriteLine(text);
  s.close();
}

// button action to write text area document to the file 

function saveTextContent(){
    
}
