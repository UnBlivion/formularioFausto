let nome = document.querySelector("#nome");
let senha = document.querySelector("#senha");
let email = document.querySelector("#email");
let butao = document.querySelector("#butao");
let alertafausto;
let faustoes;
let clapclap = new Audio('soundsfx/applause.mp3');
let errow = new Audio('soundsfx/faustaoerrou.mp3');

butao.onclick = validador;

function issotudo(){
    document.querySelector("#fausto").style.transform = "translateX(54vw) scale(1)";
    document.querySelector("#faustalerta").innerHTML = alertafausto;
    document.querySelector("#taPegandoFogoBixo").src = faustoes;
    errow.play();
}

function tudoisso(){
    document.querySelector(".alerta").style.transform = "translateY(680px) scale(1)";
    document.querySelector('.global').style.transform = "translateY(-600px)";
    document.querySelector("#fausto").style.transform = "translateX(54vw) scale(1)";
    document.querySelector("#taPegandoFogoBixo").src = faustoes;
    document.querySelector("#faustalerta").innerHTML = alertafausto;
    document.querySelector("#infonome").innerHTML = nome;
    document.querySelector("#infoemail").innerHTML = email;
    document.querySelector("#infosenha").innerHTML = senha;
    clapclap.play();
}

function validador() {
    nome = document.querySelector("#nome").value;
    email = document.querySelector("#email").value;
    senha = document.querySelector("#senha").value;
    if (nome == "") {
        alertafausto = ("Vc Não Digitou um Nome");
        document.querySelector("#faustalerta").innerHTML = alertafausto;
        faustoes = "https://media1.tenor.com/images/bf08f19e6879f3728486b90b5ca586e3/tenor.gif?itemid=9658941";
        return issotudo();
    }
    else if( email == ""){
        alertafausto = ("Vc Não Digitou um E-mail");
        faustoes = "https://media1.tenor.com/images/e56cdf4ea8fb349207b52e5e07841c8b/tenor.gif?itemid=9324347";
        return issotudo();
    }
    else if(senha == ""){
        alertafausto = ("Vc Não Digitou uma Senha");
        faustoes = "https://media1.tenor.com/images/aee1c181892814a8352e03fd4b0e0207/tenor.gif?itemid=9324361";
        return issotudo();
    }

    else if(nome == "Fausto Silva" && email == "faustao@domingao" && senha == "faustolindo"){
        alertafausto = ("Parabens Vc Achou um EasterEgg");
        faustoes = "https://i.kym-cdn.com/photos/images/original/000/894/926/768.gif";
        return tudoisso();
    }
    else{
        alertafausto = ("Fausto Silva Agradeçe !!");
        faustoes = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F11bJ2GUPuHLDlm%2Fgiphy.gif&f=1";
        return tudoisso();
    }
}