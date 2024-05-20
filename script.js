let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abrirFecharMenu() {
   

    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu
        menu.classList.remove("menu-fechado")

        // Mostrar icone X
        iconeX.style.display = "inline"

        // Esconder icone Barras
        iconeBarras.style.display = "none"

    } else {
        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

//////////////////////////////////////////////////////////////////////////////////////////

const solicitarOrcamento = (event) => {
    // Pegar valores do inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    // Organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar requisição para a api
    //127.0.0.1 -> localhost
    //Método HTTP POST - Create -> Cadastrar ou Criar
    
    fetch("http://127.0.0.1:3000/solicitacoes", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(dadosForm)
    })
    .then(resposta => { 
        console.log(resposta)

        //Limpar os campos (inputs)
        document.querySelector("#contato form").reset()

        //Mostrar alert com msg de sucesso
        alert("Solicitação cadastrada")
    })
    .catch(erro => 
        //CASO ERRO - alert com msg de erro
        {console.error(erro)
        alert("Erro desconhecido")
    }) //caso tenha erro
    
    event.preventDefault()
    
}