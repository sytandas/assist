console.log('connected');

setTimeout(function(){
  window.location.href = '/Users/sayantandas/fun/assist/index.html';
}, 50000); //TODO right not it set to 50 sec 

function saveTextContent(){
  const fs = require('fs');
  var store = document.getElementsById("textArea").innerHTML;
  var data = document.getElementById("textArea").innerText;
  fs.writeFile("output/"+file+".txt", data, (err) => {
    if (err)
      throw err;
  })
}

function refreshPage(){
  reset.onclick = window.location.reload();
}


