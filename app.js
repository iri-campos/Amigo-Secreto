//lista principal
let listaNomes = [];


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
            atualizarListaNomes();
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
    if (listaNomes.length < 2) {
        alert("Adicione pelo menos 02 nome antes de sortear.");
        return
    }

    let indiceSorteado = Math.floor(Math.random() * listaNomes.length);
    let amigoSorteado = listaNomes[indiceSorteado];

    let resultadoHTML = document.querySelector('#resultado');
    resultadoHTML.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

//Limpa o campo após inserir o nome à lista
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}