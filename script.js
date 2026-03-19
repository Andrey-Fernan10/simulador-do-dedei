    const $input = document.getElementById('ValorDoSaque')
    const $saldo = document.getElementById('saldo')
    const $deposito = document.getElementById('deposito')

    $saldo.innerHTML = (saldo)

    function realizarSaque() {
        console.log("Valor do Saldo", saldo);
        console.log("Valor do input", $input.value);
        console.log("Valor do deposito", $input.value);
            var sacada = Number($input.value)
            if (isNaN(sacada)) {
                burro.innerText = "Isso não é um número. Melhore"
                sacada = false
                setTimeout(function() {
        burro.innerText = ""
    }, 2000)
                return
            }
            if (sacada<1) {
                burro.innerText = "Ninguém saca tão pouco assim, me recuso."
                sacada = false
                setTimeout(function() {
        burro.innerText = ""
    }, 2000)
    return
            }
            if (sacada>saldo) {
            burro.innerText = "Saldo Insuficiente"
                sacada = false
                setTimeout(function() {
        burro.innerText = ""
    }, 2000)
            } else {
                saldo = saldo - sacada
                $saldo.innerHTML = saldo.toFixed(2)
                genio.innerText = "Saque efetuado com sucesso"
                setTimeout(function() {
        genio.innerText = ""
    }, 2000)
            }
    }    
        function Depositar() {
    console.log("Valor do deposito", saldo);
            var deposite = Number($deposito.value)
                        if (isNaN(deposite)) {
                pobre.innerText = "Isso não é um número. Melhore."
                deposite = false
                  setTimeout(function() {
        pobre.innerText = ""
    }, 2000)
                return
            }
            if (deposite<1) {
                pobre.innerText = "Deposito negado, reveja seus valores"
                deposite = false
                  setTimeout(function() {
        pobre.innerText = ""
    }, 2000)
    return
            }
            if (deposite>500) {
               pobre.innerText = "Programa muito limitado para tal quantia, seja mais humilde"
                deposite = false
                setTimeout(function() {
        pobre.innerText = ""
    }, 2000)
            } else {
              Number(saldo = saldo + deposite)
                $saldo.innerHTML = saldo.toFixed(2)
                rico.innerText = "Deposito feito com Sucesso"
                setTimeout(function() {
        rico.innerText = ""
    }, 2000)
            }
        }