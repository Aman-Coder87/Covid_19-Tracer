const country = document.getElementById('country');
const cases = document.getElementById('cases');
const newCases = document.getElementById('newCases');
const death = document.getElementById('death');
const newDeath = document.getElementById('newDeath');
const recovered = document.getElementById('recovered');
const newRecovered = document.getElementById('newRecovered');

async function covidApi(code) {
    let api = await fetch("https://api.covid19api.com/summary");
    let jsonData = await api.json();
    country.innerHTML = jsonData.Countries[code].Country;
    cases.innerHTML = jsonData.Countries[code].TotalConfirmed;
    newCases.innerHTML = jsonData.Countries[code].NewConfirmed;
    death.innerHTML = jsonData.Countries[code].TotalDeaths;
    newDeath.innerHTML = jsonData.Countries[code].NewDeaths;
    recovered.innerHTML = jsonData.Countries[code].TotalRecovered;
    newRecovered.innerHTML = jsonData.Countries[code].NewRecovered;

    // console.log(jsonData);
    // console.log(jsonData.Countries[code].Country);

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: [2020, jsonData.Countries[code].Date],
            datasets: [
                {
                label: 'Infected',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, jsonData.Countries[code].TotalConfirmed]
                },
                {
                label: 'Death',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(0, 0, 0)',
                data: [0,1000, jsonData.Countries[code].TotalDeaths]
                },
                {
                label: 'Recovered',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(142,226,141)',
                data: [0, jsonData.Countries[code].TotalRecovered]
                }
            ]
        },

        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });

}

covidApi(119);

async function test() {
    let app = await fetch("https://api.covid19api.com/summary");
    let jsonData = await app.json();
    console.log(jsonData);
}

test();