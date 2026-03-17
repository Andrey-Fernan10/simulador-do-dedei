var dindin = Number(prompt("Qual seu saldo?"))
while (isNaN(dindin)) {
    alert("Isso não é um número, cara")
    dindin = Number(prompt("Qual seu saldo?"))
}
if (dindin <=99) {
    alert ("Muito pobre para usar o programa, tente novamente mais tarde.")
    dindin = Number(prompt("Qual seu saldo de verdade?"))
    while (isNaN(dindin) || (dindin<=99)) {
        alert("Isso não pode ser seu saldo de verdade, tente novamente.")
        dindin = Number(prompt("Qual seu saldo de verdade?"))
    }
} else {
    alert("Bem vindo ao simulador de saque!")
}
saldo = dindin

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
                alert("Isso não é um número. Melhore.")
                sacada = false
                return
            }
            if (sacada<1) {
                alert("Ninguém saca tão pouco assim, me recuso.")
                sacada = false
            }
            if (sacada>saldo) {
            alert("Saldo Insuficiente")
                sacada = false
            } else {
                saldo = saldo - sacada.toFixed(2)
                $saldo.innerHTML = saldo
            }
    }    
        function Depositar() {
    console.log("Valor do deposito", saldo);
            var deposite = Number($deposito.value)
                        if (isNaN(deposite)) {
                alert("Isso não é um número. Melhore.")
                deposite = false
                return
            }
            if (deposite<1) {
                alert("Como tu quer depositar tão pouco?")
                deposite = false
            }
            if (deposite>500) {
               alert("Rico até demais")
                deposite = false
            } else {
                saldo = saldo + deposite
                $saldo.innerHTML = saldo
            }
        }