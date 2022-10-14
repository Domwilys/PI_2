var form = document.getElementById("formulario");//Variável que armazena a tag form do formulário.

function submit_suggest_form(e) {//Função que envia o formulário de sugestão sem recarregar a página
    e.preventDefault();//Cancela o evento de recarregamento da página
    fetch('/', {//Reconhece a rota do formulário, o método "Post", e insere o JSON para trabalhar com os objetos
        method : "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({//Transforma os objetos listados em um JSON
            nome: document.getElementById("nome_campo").value, 
            email: document.getElementById("email_campo").value,
            sugest_usr: document.getElementById("sugestao_campo").value
        })
    })
    //Limpa o formulário e da a confirmação do envio quando o formulário é enviado
    document.getElementById("nome_campo").value = '';
    document.getElementById("email_campo").value = '';
    document.getElementById("sugestao_campo").value = '';
    alert("Sugestão enviada com sucesso!");

    return false;//Faz com que a página não reconheça o envio do formulário, ou seja, não redireciona o usuário
}

form.addEventListener('submit', submit_suggest_form);//executa a função quando um evento "submit" é lançado