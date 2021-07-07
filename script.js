var text = document.getElementById("text");
var result = document.getElementById("result");
var select = document.getElementById("select");



function makechange (){
    if (select.value == "coder"){
        result.value = window.atob(text.value);
    }else{
        result.value = window.btoa(text.value);
    }
}

text.addEventListener("input",()=>{
    makechange();
});
select.addEventListener("change",()=>{
    makechange();
});