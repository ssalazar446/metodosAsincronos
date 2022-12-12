document.querySelector("#lista_paises").addEventListener('change', infocountry);
const url = 'https://restcountries.com/v3.1';
setCountries();


function setCountries () {
    console.log('Set countries V3.1')
    fetch(`${url}/all`)
    .then(resp => resp.json()) //Se convierte la respuesta a JSON
    .then(data => {             //Se obtiene los datos en formato JSON
        let htmlOptions = "";
        // for (let item of data) {
        //     document.getElementById("lista_paises").innerHTML += `<option value="${item.ccn3}">${item.name.common}</option>    `
        // }
        data.map((item)=> {
            return htmlOptions += `<option value="${item.ccn3}">${item.name.common}</option>`
        });
        document.getElementById("lista_paises").innerHTML = htmlOptions;
    })
}

function infocountry() {
    console.log("Info Pais...")
}