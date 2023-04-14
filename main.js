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