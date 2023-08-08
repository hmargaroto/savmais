
const pricesEl = document.getElementById('price-content')

   
const getPrices = async () => {
    const response = await fetch('https://localhost:5005/api/planos/getallplanosasync', {
        method: "GET"
    })
    return await response.json();
}

const makeTemplate = (prices) => {

    var template = '';

    prices.data.forEach(element => {

        var descricoes = element.descricao.split(",");

        template += `<div class='col'>
        <div class='card h-100 shadow-lg'>
        <div class='card-body'>
        <div class='text-center p-3'>
        <h5 class='card-title'>${element.titulo}</h5>
        <small>${element.meses}</small>
        <br><br>
        <span class='h2'>R$${element.valor}</span>/mês
        <br><br>
        </div>
        <p class='card-text'>Pagamento via Pix</p>
        </div>
        <ul class='list-group list-group-flush'>
        <li class='list-group-item'>${descricoes[0]}</li>
        <li class='list-group-item'>${descricoes[1]}</li>
        <li class='list-group-item'>${descricoes[2]}</li>
        </ul>
        <div class='card-body text-center'>
        </div>
        </div>
        </div>`
    });

    return template;
}

const loadPrices = async () => {
    const prices = await getPrices();
    console.log(prices);
    const template = makeTemplate(prices);
    console.log(template);
    pricesEl.innerHTML = template;
}


window.addEventListener("load", function (event) {
    loadPrices();
})



