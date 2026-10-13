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
    { ano: 2025, campeao: "Flamengo"}
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
        ["Flamengo", 90, 38, 28, 6, 4, 49],
        ["Santos", 73, 38, 22, 8, 8, 27],
        ["Palmeiras", 70, 38, 21, 11, 6, 29],
        ["Grêmio", 65, 38, 19, 8, 11, 25]
    ],

    2018: [
        ["Palmeiras", 81, 38, 23, 11, 4, 38],
        ["Flamengo", 73, 38, 21, 9, 8, 30],
        ["Internacional", 70, 38, 19, 12, 7, 22],
        ["Grêmio", 65, 38, 18, 12, 8, 21]
    ],

    2017: [
        ["Corinthians", 72, 38, 21, 9, 8, 20],
        ["Palmeiras", 63, 38, 19, 6, 13, 16],
        ["Santos", 63, 38, 17, 12, 9, 10],
        ["Grêmio", 62, 38, 18, 8, 12, 19]
    ],

    2016: [
        ["Palmeiras", 80, 38, 24, 8, 6, 30],
        ["Santos", 71, 38, 22, 5, 11, 24],
        ["Flamengo", 71, 38, 20, 11, 7, 17],
        ["Atlético-MG", 62, 38, 17, 11, 10, 8]
    ],

    2015: [
        ["Corinthians", 81, 38, 24, 9, 5, 40],
        ["Atlético-MG", 69, 38, 21, 6, 11, 18],
        ["Grêmio", 68, 38, 20, 8, 10, 20],
        ["São Paulo", 62, 38, 18, 8, 12, 6]
    ],

    2014: [
        ["Cruzeiro", 80, 38, 24, 8, 6, 29],
        ["São Paulo", 70, 38, 20, 10, 8, 19],
        ["Internacional", 69, 38, 21, 6, 11, 12],
        ["Corinthians", 69, 38, 19, 12, 7, 18]
    ],

    2013: [
        ["Cruzeiro", 76, 38, 23, 7, 8, 40],
        ["Grêmio", 65, 38, 18, 11, 9, 7],
        ["Athletico-PR", 64, 38, 18, 10, 10, 16],
        ["Botafogo", 61, 38, 17, 10, 11, 14]
    ],

    2012: [
        ["Fluminense", 77, 38, 22, 11, 5, 28],
        ["Atlético-MG", 72, 38, 20, 12, 6, 27],
        ["Grêmio", 71, 38, 20, 11, 7, 23],
        ["São Paulo", 66, 38, 20, 6, 12, 22]
    ],

    2011: [
        ["Corinthians", 71, 38, 21, 8, 9, 17],
        ["Vasco", 69, 38, 19, 12, 7, 17],
        ["Fluminense", 63, 38, 20, 3, 15, 9],
        ["Flamengo", 61, 38, 15, 16, 7, 12]
    ],

    2010: [
        ["Fluminense", 71, 38, 20, 11, 7, 26],
        ["Cruzeiro", 69, 38, 20, 9, 9, 15],
        ["Corinthians", 68, 38, 19, 11, 8, 24],
        ["Grêmio", 63, 38, 17, 12, 9, 25]
    ],

    2009: [
        ["Flamengo", 67, 38, 19, 10, 9, 14],
        ["Internacional", 65, 38, 19, 8, 11, 21],
        ["São Paulo", 65, 38, 18, 11, 9, 15],
        ["Cruzeiro", 62, 38, 18, 8, 12, 5]
    ],

    2008: [
        ["São Paulo", 75, 38, 21, 12, 5, 30],
        ["Grêmio", 72, 38, 21, 9, 8, 24],
        ["Cruzeiro", 67, 38, 21, 4, 13, 15],
        ["Palmeiras", 65, 38, 19, 8, 11, 10]
    ],

    2007: [
        ["São Paulo", 77, 38, 23, 8, 7, 36],
        ["Santos", 62, 38, 19, 5, 14, 10],
        ["Flamengo", 61, 38, 17, 10, 11, 6],
        ["Fluminense", 61, 38, 16, 13, 9, 18]
    ],

    2006: [
        ["São Paulo", 78, 38, 22, 12, 4, 34],
        ["Internacional", 69, 38, 20, 9, 9, 16],
        ["Grêmio", 67, 38, 20, 7, 11, 19],
        ["Santos", 64, 38, 18, 10, 10, 22]
    ],

    2005: [
        ["Corinthians", 81, 42, 24, 9, 9, 28],
        ["Internacional", 78, 42, 23, 9, 10, 23],
        ["Goiás", 74, 42, 22, 8, 12, 17],
        ["Palmeiras", 70, 42, 20, 10, 12, 16]
    ],

    2004: [
        ["Santos", 89, 46, 27, 8, 11, 45],
        ["Athletico-PR", 86, 46, 25, 11, 10, 37],
        ["São Paulo", 82, 46, 24, 10, 12, 35],
        ["Palmeiras", 79, 46, 22, 13, 11, 25]
    ],

    2003: [
        ["Cruzeiro", 100, 46, 31, 7, 8, 55],
        ["Santos", 87, 46, 25, 12, 9, 33],
        ["São Paulo", 78, 46, 22, 12, 12, 14],
        ["São Caetano", 74, 46, 19, 14, 13, 16]
    ],

    2002: [
        ["Santos", 54, 31, 16, 6, 9, 18],
        ["Corinthians", 52, 31, 15, 7, 9, 4],
        ["Grêmio", 48, 29, 13, 9, 7, 9],
        ["Fluminense", 46, 29, 14, 4, 11, -2]
    ],

    2001: [
        ["Athletico-PR", 63, 31, 19, 6, 6, 23],
        ["São Caetano", 63, 31, 19, 6, 6, 21],
        ["Fluminense", 54, 29, 15, 9, 5, 15],
        ["Atlético-MG", 52, 29, 16, 4, 9, 18]
    ],

    2000: [
        ["Vasco", 54, 32, 15, 9, 8, 5],
        ["São Caetano", 15, 8, 4, 3, 1, 3],
        ["Cruzeiro", 54, 30, 14, 12, 4, 21],
        ["Grêmio", 44, 30, 12, 8, 10, 4]
    ]
};


function mostrarClassificacao(ano) {
    const tabela = document.getElementById("tabelaClassificacao");
    const pesquisa = document.getElementById("pesquisaClube");
    const mensagem = document.getElementById("mensagemTabela");

    const dados = classificacao[ano] || [];
    const termo = pesquisa.value.trim().toLocaleLowerCase("pt-BR");

    tabela.innerHTML = "";

    const campeaoDoAno = campeoes.find(
        item => Number(item.ano) === Number(ano)
    );

    document.getElementById("nomeCampeao").textContent =
        campeaoDoAno ? campeaoDoAno.campeao : "Não cadastrado";

    document.getElementById("anoCampeao").textContent =
        "Temporada de " + ano;

    document.getElementById("pontosCampeao").textContent =
        dados.length ? dados[0][1] + " pts" : "—";

    const clubesFiltrados = dados
        .map((time, index) => ({ time, posicao: index + 1 }))
        .filter(item =>
            item.time[0].toLocaleLowerCase("pt-BR").includes(termo)
        );

    document.getElementById("totalClubes").textContent = dados.length;

    if (dados.length === 0) {
        mensagem.textContent =
            "Não há classificação cadastrada para esta temporada.";
        return;
    }

    if (clubesFiltrados.length === 0) {
        mensagem.textContent = "Nenhum clube encontrado.";
        return;
    }

    mensagem.textContent =
        `Exibindo ${clubesFiltrados.length} de ${dados.length} clubes cadastrados.`;

    clubesFiltrados.forEach(({ time, posicao }) => {
        const linha = document.createElement("tr");

        if (posicao === 1) {
            linha.classList.add("lider");
        } else if (posicao <= 4) {
            linha.classList.add("g4");
        }

        const valores = [
            `${posicao}º`,
            time[0],
            time[1],
            time[2],
            time[3],
            time[4],
            time[5],
            time[6]
        ];

        valores.forEach((valor, indice) => {
            const celula = document.createElement("td");
            celula.textContent = valor;

            if (indice === 1 && posicao === 1) {
                celula.textContent = "🏆 " + valor;
            }

            linha.appendChild(celula);
        });

        tabela.appendChild(linha);
    });
}

const seletorAno = document.getElementById("ano");
const pesquisaClube = document.getElementById("pesquisaClube");

seletorAno.addEventListener("change", () => {
    mostrarClassificacao(seletorAno.value);
});

pesquisaClube.addEventListener("input", () => {
    mostrarClassificacao(seletorAno.value);
});

mostrarClassificacao(seletorAno.value);