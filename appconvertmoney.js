var nhapTien = parseInt(document.getElementById("nhaptien")).value;
var fromCurrency = document.getElementById("fromcurrency").value;
var toCurrency = document.getElementById("tocurrency").value;


if(nhapTien >=0 || nhapTien <= 0 ){
    if (fromCurrency=="VND" && toCurrency=="USD"){
        let x= nhapTien*23.0502;
        document.getElementById("result").innerHTML="result:"+ x;
    }else if(fromCurrency=="VND"&&toCurrency=="VND"){
        let y = nhapTien;
        document.getElementById("result").innerHTML="result:"+ y;
    }
    else if(fromCurrency=="USD"&&toCurrency=="VND"){
        let x1=nhapTien/23.052;
        document.getElementById("result").innerHTML="result:"+ x1;
    }
    else (fromCurrency=="USD" && toCurrency=="USD"){
        let y1= nhapTien;
        document.getElementById("result").innerHTML="result:"+ y1;
    }
}


