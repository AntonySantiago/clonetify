
var usuario = document.getElementById("usuarioinput")
var senha = document.getElementById("senhainput")
var logar = document.getElementById("logar")
var criarconta = document.getElementById("criarconta")
var criarusuario = document.getElementById("criarusuario")
var criarsenha = document.getElementById("criarsenha")
const adminuser = "admin"
const adminsenha = "123456"
var criarcontabotao = document.getElementById("criarcontabutao")
var csscriarconta = document.querySelector("#criaroconta1")
var paineladmin = document.querySelector("#paineladmin")
var caixalogin = document.getElementById("caixaprincipal")
var admin = false
var artistaimg = document.getElementById("artistaimg")
var musicacapa = document.getElementById("musicaimg")
var musicamp3 = document.getElementById("musicamp3")

const vetorusuarios = []
const vetorsenhas = []


criarconta.addEventListener("click", function(){

    csscriarconta.style.display = "block"
    csscriarconta.style.zIndex = "15"

})


criarcontabotao.addEventListener("click", function(){

    csscriarconta.style.display = "none"
    csscriarconta.style.zIndex = "0"

    vetorusuarios.push(criarusuario.value)
    vetorsenhas.push(criarsenha.value)

    criarusuario.value = ""
    criarsenha.value = ""

})


logar.addEventListener("click", function(){

    loginadmin()

})


function loginadmin(){

    if(usuario.value === adminuser && senha.value === adminsenha){

        admin = true

        caixalogin.style.display = "none"
        caixalogin.style.zIndex = "0"

        console.log("Administrador logado")

        return
    }


    for(var i = 0; i < vetorusuarios.length; i++){

        if(usuario.value === vetorusuarios[i] && senha.value === vetorsenhas[i]){

            caixalogin.style.display = "none"
            caixalogin.style.zIndex = "0"

            console.log("Usuario logado")

            return
        }

    }

    console.log("Usuario ou senha incorretos")

}
function paineladmin(){
if (admin === true){
paineladmin.style.display = "block"
    paineladmin.style.zIndex = "15"
}

}
var nomeartista = document.getElementById("nomeartista")
var nomedamusica = document.getElementById("nomedamusica")

var nomeartista = document.getElementById("nomeartista")
var nomedamusica = document.getElementById("nomedamusica")
var musicas = document.getElementById("musicas")

const adicionarmusica = document.getElementById("adicionarmusica")


adicionarmusica.addEventListener("click", function(){

    var artistaimgg = artistaimg.files[0]
    var musicacapaa = musicacapa.files[0]
    var musicamp33 = musicamp3.files[0]

    var nomedamusicaa = nomedamusica.value
    var nomeartistaa = nomeartista.value


    var player = document.createElement("div")

    var imagem = document.createElement("img")
    var nome = document.createElement("h2")
    var artista = document.createElement("p")
    var audio = document.createElement("audio")


    imagem.src = URL.createObjectURL(musicacapaa)

    nome.innerText = nomedamusicaa

    artista.innerText = nomeartistaa

    audio.src = URL.createObjectURL(musicamp33)
    audio.controls = true


    player.appendChild(imagem)
    player.appendChild(nome)
    player.appendChild(artista)
    player.appendChild(audio)

    musicas.appendChild(player)


    nomedamusica.value = ""
    nomeartista.value = ""
    musicacapa.value = ""
    musicamp3.value = ""

})
