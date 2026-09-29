
var usuario = document.getElementById("usuario")
var senha = document.getElementById("senha")
var logar = document.getElementById("logar")
var criarconta = document.getElementById("criarconta")
var criarusuario = document.getElementById("usuariocriar")
var criarsenha = document.getElementById("senhacriar")
const adminuser = "admin"
const adminsenha = "123456"
var criarcontabotao = document.getElementById("criacontabutao");
var csscriarconta = document.querySelector("#criarconta")
var caixalogin = document.getElementById("#caixaprincipal")
var admin = false;
var usuario = false;
const usuariorandom = document.getElementById("criarusuario")
const senharandom = document.getElementById("criarsenha")

const vetorusuarios = []
const vetorsenhas = []


if ( usuario.innerText === adminuser && senha.innerText === adminsenha ){
    admin = true;
    usuario = false;
}

criarconta.addEventListener("click", function(){
csscriarconta.style.display = block;
csscriarconta.style.zindex = 15;
})

criarcontabotao.addEventListener("click", function(){
    csscriarconta.style.display = none;
csscriarconta.style.zindex = 0;
} )
function loginadmin(){
    if ( usuario.innerText === adminuser && senha.innerText === adminsenha ){
    admin = true;
    usuario = false;
    caixalogin.style.display = none
    caixalogin.style.zindex = 0;

}
if ( usuario.innerText === criarconta.innerText && senha.innerText === criarsenha.innerText ){
    admin = true;
    usuario = false;
    caixalogin.style.display = none
    caixalogin.style.zindex = 0;

}
}

// criar vetor pra pegar varios dados e senhas