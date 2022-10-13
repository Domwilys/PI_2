var form = document.getElementById("formulario");

function submit_suggest_form(e) {
    e.preventDefault();
    fetch('/', {
        method : "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            nome: document.getElementById("nome_campo").value, 
            email: document.getElementById("email_campo").value,
            sugest_usr: document.getElementById("sugestao_campo").value
        })    
    }).then((response) => {
        console.log(response.text())
    });
   return false;
}

form.addEventListener('submit', submit_suggest_form);