
// let valorPar = parseInt(prompt('Valor STOCKX'));
// let valorParMas26 = valorPar + 26;
// console.log (`VALOR PAR BUYBOX ${valorParMas26}`)
// let valorParProfit = valorParMas26 * 1.4;

// let valorpeso = valorParProfit * 40;
// console.log();
// document.write(`VALOR TOTAL PESOS ${valorpeso}`)

let input = document.getElementById('precioSTOCKX');
let btn = document.getElementById('btnSubmit');
let precioFinalProfit = document.getElementById('precioFinalProfit')

function calcular () {
    let precioUsa = parseInt(input.value) + 26;
    let precioTotalProfit = precioUsa * 1.40;
    let precioPesos = precioTotalProfit * 39.5;
    precioFinalProfit.innerHTML = `VALOR TOTAL PESOS 40% <b class="totalPesos">$${Math.round(precioPesos)}</b> VALOR TOTAL EN DOLARES = <b class="totalPesos">$${precioTotalProfit}`;
}


btn.addEventListener('click',()=>{
    calcular()
});

