
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
    console.log(precioUsa);
    let precioTotalProfit = precioUsa * 1.30;
    console.log(precioTotalProfit);
    let precioPesos = precioTotalProfit * 40;
    console.log(precioPesos);
    precioFinalProfit.innerHTML = `VALOR TOTAL PESOS <b class="totalPesos">$${Math.round(precioPesos)}</b>`;
}


btn.addEventListener('click',()=>{
    calcular()
});

