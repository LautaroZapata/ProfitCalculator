
// let valorPar = parseInt(prompt('Valor STOCKX'));
// let valorParMas26 = valorPar + 26;
// console.log (`VALOR PAR BUYBOX ${valorParMas26}`)
// let valorParProfit = valorParMas26 * 1.4;

// let valorpeso = valorParProfit * 40;
// console.log();
// document.write(`VALOR TOTAL PESOS ${valorpeso}`)

let btn = document.getElementById('btnSubmit');
let porcentaje;
let precioFinalProfit = document.getElementById('precioFinalProfit')

function calcular () {
    let precioUsa = parseInt(document.getElementById('precioSTOCKX').value) + 26;

    let profit = document.getElementById('cantProfit').value;

    
    if(profit == '30') {
        porcentaje = 1.30
    }else if(profit == '40'){
        porcentaje = 1.40
    }else {
        porcentaje = 1.50
    }
    let profitDolar = precioUsa * porcentaje;
    let precioPesos = profitDolar * 39.5;
    precioFinalProfit.innerHTML = `VALOR TOTAL PESOS %${profit} PROFIT <b class="totalPesos">$${Math.round(precioPesos)}</b> VALOR TOTAL EN DOLARES = <b class="totalPesos">$${Math.round(profitDolar)}`;
    console.log(profit);
}


btn.addEventListener('click',()=>{
    calcular()
});

