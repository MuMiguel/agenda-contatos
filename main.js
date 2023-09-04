const form = document.getElementById('formAgenda');
const nomes = [];
const numeros = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();
});
    

function adicionaLinhas () {
    const inputNomeContato = document.getElementById('nomeContato');
    const inputTeleContato = document.getElementById('telContato');

    if(nomes.includes(inputNomeContato.value)) {
        alert(`O contato "${inputNomeContato.value}" já foi inserido à sua agenda`);
    }else {
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTeleContato.value}</td>`;
        linhas += linha;

        nomes.push(inputNomeContato.value);
        numeros.push(inputTeleContato.value);

        inputNomeContato.value = '';
        inputTeleContato.value = '';
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}



