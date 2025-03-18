var l = document.getElementById ('linkedin')
var g = document.getElementById ('github')
var c = document.getElementById ('contato')
var P = document.getElementById('projetos')

//=========== FUNÇOES DE EXPANÇAO DE DETALHES DOS BOTÕES ============

function fimtestelinkedin(){
    l.innerHTML = ("Acesse aqui o meu LINKEDIN!")
    
}

function testelinkedin(){
       
    l.innerHTML = ("Clique para ir para o LINKEDIN 👥")
}

function fimtestegithub(){
    g.innerHTML = ("Acesse aqui o meu GITHUB!")
}

function testegithub(){
       
    g.innerHTML = ("Clique para ir para o GITHUB 💻")
}
function fimtestecontato(){
    c.innerHTML = ("Entre em contato COMIGO!")

    
}

function testecontato(){
       
    c.innerHTML = ("Clique para Entrar em CONTATO 📧")
}

//================ FUNÇOES DE LINKS =================

function acessarlinkedin(){
    open("https://www.linkedin.com/in/ederson-dalazen-wilke-9ba83b15b/")
}
function acessargithub(){
    open("https://github.com/EdersonDWilke-Zezinho")
}
function acessarcontato(){
    window.location.href = ("contato.html")
}

function projetos(){
    //p = document.createElement(Option(Text, value))

}

//roleta de projetos ==============

const roleta = document.getElementById("roleta");
let position = 0;

// Detecta o movimento do scroll
window.addEventListener("wheel", (event) => {
    event.preventDefault(); // Evita o scroll normal da página
    const step = 50; // Quantidade de movimento

    if (event.deltaY > 0) {
        // Scroll para baixo -> Desce os itens
        position -= step;
    } else {
        // Scroll para cima -> Sobe os itens
        position += step;
    }

    // Atualiza a posição da roleta
    roleta.style.transform = `translateY(${position}px)`;
});