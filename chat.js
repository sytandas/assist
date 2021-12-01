//chat.js file connect with the chat.html and interect with the user input - and reply accordingly 
//intially we make it simple one question to another reply format 
//future TODO: machine learning algortihm to predict and implement reply(s)

// todo:: 
// write funtions that are doing file creation/checking 
// write function for lexical analysis and return according to the input
// write function for ouput showing 
// connect to the html page and return 2 ouput intially::  hi <-> hello && how are you <-> i'm good


//file creation function and if same file available then re-create it with different file name dd-mm-yyyy (future scope - showing detatis on page)
function file_create(){
  var fso = CreateObject("Scripting.FileSystemObject");
  var a = fso.CreateTextFile("/Users/sayantandas/fun/assist/output", true);
  a.WriteLine("test case");
  a.Close();
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
