document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os dados do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    // Exibe os dados na página, abaixo do botão "Enviar" teste
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = 'Nome: ' + nome + '<br>Email: ' + email;
    });

