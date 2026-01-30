function contagem() {
    var ini = document.getElementById('txti')
    var fim = document.querySelector('input#txtf')
    var passo = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert ('[ERRO] Dados estão faltando')
    } else {
        res.innerHTML = 'Contando: '
        // Transformando todos as variaveis em numeros para fazer o calculo
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

            if (p <= 0) {
                window.alert('Passo inválido! Considerando PASSO 1')
                p = 1
            }
            
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}` 
            }
        }

        for(var c = i; c <= f; c += p ) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}