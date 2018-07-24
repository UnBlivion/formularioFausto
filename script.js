let nome = document.querySelector("#nome");
let senha = document.querySelector("#senha");
let email = document.querySelector("#email");
let butao = document.querySelector("#butao");
let alertafausto;
butao.onclick = validador;

function validador() {
    nome = document.querySelector("#nome").value;
    email = document.querySelector("#email").value;
    senha = document.querySelector("#senha").value;
    if (nome == "") {
        document.querySelector("#fausto").style.transform = "translateX(54vw) scale(1)";
        alertafausto = ("Vc Não Digitou um Nome");
        document.querySelector("#faustalerta").innerHTML = alertafausto;
    }
    else if( email == ""){
        document.querySelector("#fausto").style.transform = "translateX(54vw) scale(1)";
        alertafausto = ("Vc Não Digitou um E-mail");
        document.querySelector("#faustalerta").innerHTML = alertafausto;
    }
    else if(senha == ""){
        document.querySelector("#fausto").style.transform = "translateX(54vw) scale(1)";
        alertafausto = ("Vc Não Digitou uma Senha");
        document.querySelector("#faustalerta").innerHTML = alertafausto;
    }
    else{
        document.querySelector(".alerta").style.transform = "translateY(680px) scale(1)";
        document.querySelector("#fausto").style.transform = "translateX(54vw) scale(1)";
        document.querySelector("#faustalerta").innerHTML = alertafausto;
        document.querySelector('.global').style.transform = "translateY(-600px)";
        document.querySelector("#infonome").innerHTML = nome;
        document.querySelector("#infoemail").innerHTML = email;
        document.querySelector("#infosenha").innerHTML = senha;
    }
}