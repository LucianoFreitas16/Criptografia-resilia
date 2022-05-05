var codifica = document.querySelector('#codificar');
var saiMsg = document.querySelector('#return');
var codigo = document.querySelector('#escolha')
var bt = document.querySelector('#botaoCod');
var incrs = document.querySelector('#incremento');
var decodifica = document.querySelector('#decod');
var entraMsg = document.querySelector('#msg');


codifica.addEventListener("click", function(){
    bt.innerText = "Codificar Mensagem"
})

decodifica.addEventListener('click', function(){
    bt.innerText = "Decodificar Mensagem";
})


codigo.addEventListener('change', function(){
  if (codigo.value == '0' || codigo.value == 'base64') {
    document.querySelector('.incr').style.display = 'none';
  } else {
    document.querySelector('.incr').style.display = 'flex';
  }
})


bt.addEventListener('click', (function (noRecarg) {
  noRecarg.preventDefault();
  criptografar(entraMsg.value) 
}))

function criptografar(texto) {
  if (codigo.value == 'base64' && bt.innerText == 'Codificar Mensagem') {
    var resultCripto64 = btoa(texto);
    saiMsg.value = resultCripto64;
  } else if (codigo.value == 'cifraDeCesar' && bt.innerText == 'Codificar Mensagem') {
    var resultCesar = cifraDeCesar(entraMsg.value, +incrs.value);
    saiMsg.value = resultCesar;
  } else if (codigo.value == 'base64' && bt.innerText == 'Decodificar Mensagem') {
    var resultDecripto64 = atob(texto) 
    saiMsg.value = resultDecripto64;
  } else if (codigo.value == 'cifraDeCesar' && bt.innerText == 'Decodificar Mensagem') {
    var resultDecriptoCesar = cesarDecifrado(entraMsg.value, +incrs.value);
    saiMsg.value = resultDecriptoCesar;
  } 
  }

function cifraDeCesar(texto, increment) {
var entrada = texto.split('');
var numeroCesar = [];
var retornoCesar = [];
for (i=0; i < entrada.length ; i++) {
  if(entrada[i].charCodeAt() > 64 && entrada[i].charCodeAt() < 91) {
    var aplicaCifra = (entrada[i].charCodeAt() - 65 + increment) % 26;
    numeroCesar.push(aplicaCifra + 65);
  } else if (entrada[i].charCodeAt() >= 97 && entrada[i].charCodeAt() <= 122) {
    aplicaCifra = (entrada[i].charCodeAt() - 97 + increment) % 26;
    numeroCesar.push(aplicaCifra + 97);
  } else {
    numeroCesar.push(entrada[i].charCodeAt())
    }
  }

  for (var j = 0; j < numeroCesar.length ; j++) {
          retornoCesar.push(String.fromCharCode(numeroCesar[j]))
      }
      return retornoCesar.join('');
    
}