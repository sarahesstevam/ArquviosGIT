<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nome = htmlspecialchars($_POST['nome']);
        $email = htmlspecialchars($_POST['email']);
    
        // Aqui você pode adicionar o código para processar os dados, como salvar em um banco de dados ou enviar um email
        echo "Nome: " . $nome . "<br>";
        echo "Email: " . $email . "<br>";
    }
    
    // Inclui o arquivo HTML
    include 'index.html';
?>