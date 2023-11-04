
function days(){
    var dayshtmlelement;
    for(var i =1 ; i<=31 ; i++){
        dayshtmlelement+=`<option value=${i}>${i}</option>`
    }
    document.getElementById("SelectDay").innerHTML=dayshtmlelement
}

function months(){
    var monthhtmlelement;
    for(var i =1 ; i<=12 ; i++){
        monthhtmlelement+=`<option value=${i}>${i}</option>`
    }
    document.getElementById("Selectmonth").
    innerHTML=monthhtmlelement
}

function years(){
    var yearhtmlelement;
    for(var i=1900 ; i<=2024 ; i++){
        yearhtmlelement+=`<option value=${i}>${i}</option>`
    }
    document.getElementById('Selectyear').
    innerHTML=yearhtmlelement
}

days();
months();
years();