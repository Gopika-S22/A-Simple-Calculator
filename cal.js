
function buttonclick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}


function ClearDisplay(){
    document.getElementById("screen").value=""
}
function equalto(){
    var text=document.getElementById("screen").value
    var result=eval(text)                      //eval specified function
    document.getElementById("screen").value=result
}