function myExchange(){
var input =parseInt(prompt(document.getElementById("inpuTMoney")).value);
var from= document.getElementById("from").value;
var to= document.getElementById("to").value;
var result;
if(from == "VND"&& to == "USD"){
    result=input/23000;
    document.getElementById("result").innerHTML="result: " + result;
}
if(from == "VND" && to == "VND"){
    result=input*1;
    document.getElementById("result").innerHTML="result: "+ result;
}
if(from == "USD" && to == "VND"){
    result=input*22300;
    document.getElementById("result").innerHTML="result: "+ result;
}
if( from =="USD" && to =="USD"){
    result=input*1
        document.getElementById("result").innerHTML="result: " + result;
    }

}