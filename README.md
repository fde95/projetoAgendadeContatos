<h1 align="center">
  <p align="center">Projeto <a href="https://felipe-projeto-agenda-de-contatos.vercel.app/">yourNetwork.</p></a>
 <img src="https://media.giphy.com/media/3o6MbhXVkbyVtUSS2Y/giphy.gif" alt="Hommer Simpson atendendo o telefone">
</h1>
<div style="display: inline_block"><br>
  <div align="center">
  <img align="center" alt="fde95-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="fde95-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="fde95-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
</div>

<h3> Sobre o Projeto </h3>
No segundo projeto do curso Engenheiro Front-End oferecido pela EBAC, tive como desafio a elaboração de uma página que funcionasse como uma agenda de contatos. As instruções eram:
<br><b>Crie uma aplicação de agenda de contatos.
<br>Construa uma tabela, nesta tabela deve conter as colunas: Nome e Telefone.
<br>Construa um formulário onde o usuário irá inserir o nome e o telefone do contato e ao clicar em cadastrar uma linha será adicionada na tabela de contatos.</b>
<p><br>Como desafio pessoal, decidi adicionar mais um campo na tabela a ser preenchida pelo usuário, sendo ele o campo "Rótulo", onde o usuário poderá dizer a que tipo de chamada se refere o contato adicionado (ex.: Comercial, Celular, Residencial, etc). 
<br>No botão "Adicionar" coloquei uma imagem que simbolizasse a inclusão de um novo contato na lista.
<br>Incluí também uma nova coluna à tabela, a coluna "Ligar". Após o preenchimento pelo usuário e a inclusão do contato na tabela, o usuário poderá realizar ligações para o número adicionado apenas clicando no icone do telefone.
<br>E como inclusão final, adicionei um alerta através do JavaScript caso haja a duplicidade de um número de telefone, visto que uma unica pessoa pode ter diversos números, mas dificilmente um número para diversas pessoas.</>
<br><p>Para finalizar, disponibilizei a agenda que apelidei de "yourNetwork." através do Vercel.</p>


<h2>Acesse aqui: <a href="https://felipe-projeto-agenda-de-contatos.vercel.app/"><b> yourNetwork. </b></a></h2>

<br></br>
<h3>Pré Visualização</h3>
<img width="600" src="https://user-images.githubusercontent.com/123211425/232122247-a80f461d-c24c-49f5-bb0d-9da4a54d51d9.png">


<h4>Inclusão de um novo contato</h4>
<img width="600" src="https://user-images.githubusercontent.com/123211425/232122367-c809c992-13f8-4b36-90ce-eaeb774682e4.png">

<h4>Alerta de duplicidade de contato</h4>
<img width="600" src="https://user-images.githubusercontent.com/123211425/232122507-58f60bf2-d68e-480e-9085-47d9e79df8c3.png">


<br></br>

<h3>Contatos</h3>
<div style="display: inline_block">
 <a href="https://instagram.com/fde.95" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
 <a href = "mailto:fdespinoza95@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
 <a href="https://www.linkedin.com/in/fde95" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</div>

<br></br>

<h3>Código Completo</h3>

<h4>HTML</h4>

```xml
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;400;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./main.css">
    <title>yourNetwork.</title>
</head>
<body>
    <div class="container">
        <header>
            <img src="./image/iconmonstr-smartphone-9-240.png" />
            <h1>yourNetwork.</h1>
            </header>
            <h4>todos em um só lugar</h4>
            <form id="formContatos">
                <input type="text" id="nomeContato" required placeholder="Nome do contato" />
                <input type="number" id="numeroContato" required placeholder="Num. c/ DDD"/>
                <input type="text" id="tipoContato" required placeholder="Rótulo"/>
                <button type="submit">Adicionar<img src="./image/iconmonstr-user-23-240.png"/></button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>
                            Nome do Contato
                        </th>
                        <th>
                            Número de Contato
                        </th>
                        <th>
                            Rótudo
                        </th>
                        <th>
                            Ligar
                        </th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            <footer>&copy; Criado e desenvolvido por: <b><a href="https://linktr.ee/fde95" target="_blank">Felipe Espinoza</a></b> - 2023</footer>
        <script src="./main.js"></script>
    </div>
</body>
</html>
```

<h4>CSS</h4>

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Jost', sans-serif;
    color: #fff;
    }

body{
    background: linear-gradient(239.44deg, #000000 18.53%, rgba(0, 0, 0, 0.9) 79.46%);
    backdrop-filter: blur(20px);
    background-repeat:round;
    padding-top: 100px;
}

.container{
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
}

header{
    display: flex;
    align-items: center;
}

header h1{
    color: greenyellow;
}

h4{
    margin-top: -18px;
    margin-left: 120px;
}

header img{
    height: 60px;
    padding-right: 16px;
}

form{
    display: flex;
    max-width: 640px;
    width: 100%;
    justify-content:space-between;
    margin-bottom: 56px;
    margin-top: 20px;
    border: none;
}

form input{
    font-size: 16px;
    padding: 8px;
    border-radius: 10px;
    border: none;
    color: #000000;
}

#nomeContato {
    width: 1000px;
    margin-right: 15px;
}

#numeroContato{
    margin-right: 15px;
}

form button{
    display: flex;
    font-size: 18px;
    align-items: center;
    background-color:rgb(132, 196, 36) ;
    border-radius: 50px;
    cursor: pointer;
    padding: 10px 16px;
    margin-left: 50px;
    border: none;
}

form button img{
    height:30px;
    margin-left: 10px;
}

form button:hover{
    background-color:rgb(83, 123, 23);
}


table {
    width: 100%;
}

table th{
    border-bottom: 2px solid #000;
    padding: 16px;
    font-size: 20px;
    font-weight: bold;
}

table td{
    text-align: center;
    font-size: 16px;
    padding: 16px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}

table td a img{
    height: 20px;
}

footer{
    text-align: center;
    padding: 320px 0 40px 0;
    color: greenyellow;
}

footer a{
    text-decoration: none;
    color: greenyellow;
}

footer a:hover{
    color: #fff;
}
```

<h4>JavaScript</h4>

```js
const form = document.getElementById('formContatos');
const contatos = [];
const numeros = [];
const tipos = [];

let lines = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLine();
    pushTable ();
});

function addLine(){
    const inputContactName = document.getElementById('nomeContato');
    const inputContactNumb = document.getElementById('numeroContato'); 
    const inputLabel = document.getElementById('tipoContato');

    if (numeros.includes(inputContactNumb.value)){
        alert (`O número ${inputContactNumb.value} já existe em sua lista`)
    } else {
    contatos.push(inputContactName.value);
    numeros.push(inputContactNumb.value);
    tipos.push(inputLabel.value);

        let line = '<tr>';
        line += `<td>${inputContactName.value}</td>`;
        line += `<td>${inputContactNumb.value}</td>`;
        line += `<td>${inputLabel.value}</td>`;
        line += `<td><a href="tel:+55${inputContactNumb.value}"><img src="./image/iconmonstr-phone-1-240.png"></a></td>`;
        line += '</tr>';

        lines += line;
    }
    inputContactName.value = '';
    inputContactNumb.value = '';
    inputLabel.value = '';
}

function pushTable(){
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = lines;
}
```
