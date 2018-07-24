let nome = document.querySelector("#nome");
let senha = document.querySelector("#senha");
let email = document.querySelector("#email");
let butao = document.querySelector("#butao");

butao.onclick = validador;

function validador() {
    nome = document.querySelector("#nome").value;
    email = document.querySelector("#email").value;
    senha = document.querySelector("#senha").value;
    if (nome == "") {
        alert("Digite um Nome");
    }
    else if( email == ""){
        alert("Digite Um E-mail");
    }
    else if(senha == ""){
        alert("Digite Uma Senha");
    }
    else{
        document.querySelector(".alerta").style.transform = "translateY(700px) scale(1)";
        document.querySelector("#fausto").style.transform = "translateX(770px) scale(1)";
        document.querySelector('.global').style.transform = "translateY(-600px)";
        document.querySelector("#infonome").innerHTML = nome;
        document.querySelector("#infoemail").innerHTML = email;
        document.querySelector("#infosenha").innerHTML = senha;
    }
}