function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    var hora = 19

    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        // mensagem de bom dia 
        img.src = 'imagens/dia.png'
        document.body.style.background = 'yellow'
    } else if (hora >=12 && hora <= 18) {
        // mensagem de boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = 'orange'

    } else {
        // mensagem de boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = 'darkgrey'

    }
}