const campeoes = [
    { ano: 2000, campeao: "Vasco" },
    { ano: 2001, campeao: "Athletico-PR" },
    { ano: 2002, campeao: "Santos" },
    { ano: 2003, campeao: "Cruzeiro" },
    { ano: 2004, campeao: "Santos" },
    { ano: 2005, campeao: "Corinthians" },
    { ano: 2006, campeao: "São Paulo" },
    { ano: 2007, campeao: "São Paulo" },
    { ano: 2008, campeao: "São Paulo" },
    { ano: 2009, campeao: "Flamengo" },
    { ano: 2010, campeao: "Fluminense" },
    { ano: 2011, campeao: "Corinthians" },
    { ano: 2012, campeao: "Fluminense" },
    { ano: 2013, campeao: "Cruzeiro" },
    { ano: 2014, campeao: "Cruzeiro" },
    { ano: 2015, campeao: "Corinthians" },
    { ano: 2016, campeao: "Palmeiras" },
    { ano: 2017, campeao: "Corinthians" },
    { ano: 2018, campeao: "Palmeiras" },
    { ano: 2019, campeao: "Flamengo" },
    { ano: 2020, campeao: "Flamengo" },
    { ano: 2021, campeao: "Atlético-MG" },
    { ano: 2022, campeao: "Palmeiras" },
    { ano: 2023, campeao: "Palmeiras" },
    { ano: 2024, campeao: "Botafogo" },
    { ano: 2025, campeao: "flamengo"}
];

const tabelaCampeoes = document.getElementById("tabelaCampeoes");

campeoes.forEach(item => {

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${item.ano}</td>
        <td>${item.campeao}</td>
    `;

    tabelaCampeoes.appendChild(linha);
});


const classificacao = {

    2025: [
        ["Flamengo", 79, 38, 23, 10, 5, 51],
        ["Palmeiras", 76, 38, 23, 7, 8, 33],
        ["Cruzeiro", 70, 38, 19, 13, 6, 24],
        ["Mirassol", 67, 38, 18, 13, 7, 24]
    ],

    2024: [
        ["Botafogo", 79, 38, 23, 10, 5, 30],
        ["Palmeiras", 76, 38, 22, 10, 6, 27],
        ["Flamengo", 70, 38, 20, 10, 8, 19],
        ["Fortaleza", 68, 38, 19, 11, 8, 14]
    ],

    2023: [
        ["Palmeiras", 70, 38, 20, 10, 8, 31],
        ["Grêmio", 68, 38, 21, 5, 12, 7],
        ["Atlético-MG", 66, 38, 19, 9, 10, 20],
        ["Flamengo", 66, 38, 19, 9, 10, 14]
    ],

    2022: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2021: [
        ["Atlético-MG", 84, 38, 26, 6, 6, 33],
        ["Flamengo", 71, 38, 21, 8, 9, 33],
        ["Palmeiras", 66, 38, 20, 6, 12, 15],
        ["Fortaleza", 58, 38, 17, 7, 14, -1]
    ],

    2020: [
        ["Flamengo", 71, 38, 21, 8, 9, 20],
        ["Internacional", 70, 38, 20, 10, 8, 26],
        ["Atlético-MG", 68, 38, 20, 8, 10, 19],
        ["São Paulo", 66, 38, 18, 12, 8, 18]
    ],

    2019: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2018: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2017: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2016: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2015: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2014: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2013: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2012: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2011: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2010: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2009: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2008: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2007: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2006: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2005: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2004: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2003: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2002: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2001: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ],

    2000: [
        ["Palmeiras", 81, 38, 23, 12, 3, 39],
        ["Internacional", 73, 38, 20, 13, 5, 27],
        ["Fluminense", 70, 38, 21, 7, 10, 22],
        ["Corinthians", 65, 38, 18, 11, 9, 8]
    ]
};


function mostrarClassificacao(ano) {

    const tabela = document.getElementById("tabelaClassificacao");

    tabela.innerHTML = "";

    classificacao[ano].forEach((time, index) => {

        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${index + 1}º</td>
            <td>${time[0]}</td>
            <td>${time[1]}</td>
            <td>${time[2]}</td>
            <td>${time[3]}</td>
            <td>${time[4]}</td>
            <td>${time[5]}</td>
            <td>${time[6]}</td>
        `;

        tabela.appendChild(linha);
    });
}


const seletorAno = document.getElementById("ano");

seletorAno.addEventListener("change", function() {

    mostrarClassificacao(this.value);

});


mostrarClassificacao("2025");