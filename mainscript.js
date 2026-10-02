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

var nomeartista = document.getElementById("nomeartista")
var nomedamusica = document.getElementById("nomedamusica")

var musicas = document.getElementById("musicas")
var div2 = document.getElementById("div2")

var adicionarmusica = document.getElementById("adicionarmusica")
var sair = document.getElementById("sair")

const vetorusuarios = []
const vetorsenhas = []

var artistas = []
var proximoid = 0


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

        paineladmin.style.display = "block"
        paineladmin.style.zIndex = "15"

        sair.style.display = "block"

        document.querySelector("main").style.display = "block"

        console.log("Administrador logado")

        return
    }


    for(var i = 0; i < vetorusuarios.length; i++){

        if(usuario.value === vetorusuarios[i] && senha.value === vetorsenhas[i]){

            caixalogin.style.display = "none"
            caixalogin.style.zIndex = "0"

            paineladmin.style.display = "none"

            sair.style.display = "block"

            document.querySelector("main").style.display = "block"

            console.log("Usuario logado")

            return
        }

    }

    console.log("Usuario ou senha incorretos")

}


adicionarmusica.addEventListener("click", function(){

    var artistaimgg = artistaimg.files[0]
    var musicacapaa = musicacapa.files[0]
    var musicamp33 = musicamp3.files[0]

    var nomedamusicaa = nomedamusica.value
    var nomeartistaa = nomeartista.value


    if(!artistaimgg || !musicacapaa || !musicamp33){

        console.log("Escolha a imagem do artista, a capa e a musica")

        return
    }


    if(nomedamusicaa === "" || nomeartistaa === ""){

        console.log("Digite o nome da musica e o nome do artista")

        return
    }


    var artistaexistente = artistas.find(function(item){

        return item.nome === nomeartistaa

    })


    if(!artistaexistente){

        artistaexistente = {

            id: proximoid,
            nome: nomeartistaa,
            imagem: URL.createObjectURL(artistaimgg),
            musicas: []

        }

        proximoid++

        artistas.push(artistaexistente)


        var artistadiv = document.createElement("div")
        var artistap1 = document.createElement("p")
        var artistaimgdiv = document.createElement("img")


        artistadiv.classList.add("artistadiv")


        artistaimgdiv.src = artistaexistente.imagem

        artistap1.innerText = artistaexistente.nome


        artistadiv.appendChild(artistaimgdiv)
        artistadiv.appendChild(artistap1)

        div2.appendChild(artistadiv)


        artistadiv.addEventListener("click", function(){

            abrirArtista(artistaexistente.id)

        })

    }


    var musica = {

        nome: nomedamusicaa,
        capa: URL.createObjectURL(musicacapaa),
        arquivo: URL.createObjectURL(musicamp33)

    }


    artistaexistente.musicas.push(musica)


    var player = document.createElement("div")

    player.classList.add("player")


    var imagem = document.createElement("img")
    var nome = document.createElement("h2")
    var artista = document.createElement("p")
    var audio = document.createElement("audio")


    imagem.src = musica.capa

    nome.innerText = musica.nome

    artista.innerText = artistaexistente.nome

    audio.src = musica.arquivo
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
    artistaimg.value = ""

})


function abrirArtista(id){

    var artista = artistas.find(function(item){

        return item.id === id

    })


    if(!artista){

        return

    }


    var paginaartista = document.getElementById("paginaartista")
    var tituloartista = document.getElementById("tituloartista")
    var musicasartista = document.getElementById("musicasartista")


    paginaartista.style.display = "block"

    tituloartista.innerText = artista.nome

    musicasartista.innerHTML = ""


    artista.musicas.forEach(function(musica){

        var player = document.createElement("div")

        player.classList.add("player")


        var imagem = document.createElement("img")
        var nome = document.createElement("h2")
        var artistaNome = document.createElement("p")
        var audio = document.createElement("audio")


        imagem.src = musica.capa

        nome.innerText = musica.nome

        artistaNome.innerText = artista.nome

        audio.src = musica.arquivo
        audio.controls = true


        player.appendChild(imagem)
        player.appendChild(nome)
        player.appendChild(artistaNome)
        player.appendChild(audio)


        musicasartista.appendChild(player)

    })

}


sair.addEventListener("click", function(){

    caixalogin.style.display = "flex"
    caixalogin.style.zIndex = "100"

    document.querySelector("main").style.display = "none"

    paineladmin.style.display = "none"

    sair.style.display = "none"

    usuario.value = ""
    senha.value = ""

})


var voltarartistas = document.getElementById("voltarartistas")


if(voltarartistas){

    voltarartistas.addEventListener("click", function(){

        var paginaartista = document.getElementById("paginaartista")

        paginaartista.style.display = "none"

    })

}


if("serviceWorker" in navigator){

    navigator.serviceWorker.register("./service-worker.js")

}