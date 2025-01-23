//lista principal
let listaNomes = [];

// Lista temporária para sorteio sem repetição
let listaSorteio = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Amigo Secreto');
    exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
}
exibirMensagemInicial();


function adicionarAmigo() {
    //captura o valor digitado no input
    let nome = document.querySelector('#amigo').value;

    //Expressão regular para validar nome (somente letras e espaços)
    let regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    //Verifica se o nome corresponde ao padrão esperado. regexNome.test(nome): Verifica se o nome segue o padrão correto. nome.trim() !== "": Garante que o nome não está vazio ou com espaços em branco.
    if (regexNome.test(nome) && nome.trim() !== "") {
        //Verifica se o nome já existe na lista
        if (listaNomes.includes(nome)) {
            alert("Este nome já foi adicionado. Por favor, insira um novo nome!")
        } else {
            listaNomes.push(nome); //adiciona o nome à lista principal
            listaSorteio.push(nome); //adiciona o nome à lista de sorteio
            atualizarListaNomes(); //Aualiza a lista na tela
        }
    
    } else {
        alert("Por favor, insira um nome válido.")
    }
    limparCampo();
}

// Função para atualizar a lista exibida na tela
function atualizarListaNomes() {
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = ""; //limpa a lista antes de atualizar

    listaNomes.forEach(function(nome) {
        let item = document.createElement('li'); //cria um item na lista
        item.textContent = nome; //Define o nome do item da lista
        listaHTML.appendChild(item); //Adiciona o item à lista
    });
}

// Função para sortear um amigo secreto sem repetir
function sortearAmigo() {
    //Valida se tem mais de 2 nomes na lista principal
    if (listaNomes.length < 2) {
        alert("Adicione pelo menos 02 nome antes de sortear.");
        return
    } if (listaSorteio.length === 0) { //Valida se ainda existem nomes para sorteio
        alert("Todos os amigos já foram sorteados! A Lista será reiniciada para um novo sorteio.");

        //limpar as listas para reiniciar o processo
        listaNomes = [];
        listaSorteio = [];

        //Atualziar interface para limpar a lista da tela
        atualizarListaNomes();

        //Limpar resultado da tela
        document.querySelector('#resultado').innerHTML = '';

        return;
    }

    //Escolhe um índice aleatório na lista de Sorteio
    let indiceSorteado = Math.floor(Math.random() * listaSorteio.length);
    let amigoSorteado = listaSorteio[indiceSorteado];

    //Remove o amigo sorteado da lista temporária
    listaSorteio.splice(indiceSorteado, 1);

    //Exibe o resultado na tela
    let resultadoHTML = document.querySelector('#resultado');
    resultadoHTML.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

//Limpa o campo após inserir o nome à lista
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}
