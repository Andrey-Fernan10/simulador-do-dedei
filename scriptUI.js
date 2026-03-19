let saldo = 0

function ir() {
  document.getElementById('menu').style.display = 'none'
  document.getElementById('meio').style.display = 'block'
 
}
function simulador() {
 let valorDigitado = document.getElementById('meuSaldo').value
 saldo = parseFloat(valorDigitado)
 if (isNaN(saldo) || saldo < 100) {
    erro.innerText = "Valor Invalido"
    setTimeout(function() {
        erro.innerText = ""
    }, 2000)
    return
 } else {
    document.getElementById('saldo').innerText = saldo.toFixed(2)
    document.getElementById('meio').style.display = 'none';
    document.getElementById('pagina').style.display = 'block';
 }
}