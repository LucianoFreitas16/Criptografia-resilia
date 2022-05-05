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
function cifraDeCesar(texto, incrementa) {
var entra = texto.split('');
var nc = [];
var rc = [];
for (i=0; i < entra.length ; i++) {
  if(entra[i].charCodeAt() > 64 && entra[i].charCodeAt() < 91) {
    var aplicaCifra = (entra[i].charCodeAt() - 65 + incrementa) % 26;
    nc.push(aplicaCifra + 65);
  } else if (entra[i].charCodeAt() >= 97 && entra[i].charCodeAt() <= 122) {
    aplicaCifra = (entra[i].charCodeAt() - 97 + incrementa) % 26;
    nc.push(aplicaCifra + 97);
  } else {
    nc.push(entra[i].charCodeAt())
    }
  }
  for (var j = 0; j < nc.length ; j++) {
    rc.push(String.fromCharCode(nc[j]))
      }
      return rc.join('');
    
}
function cesarDecifrado(texto, incrementa) {
  var mensagem = texto.split('')
  var msgCodificada = []
  var cn = []

  for (let i = 0; i < mensagem.length; i++) {
      if (mensagem[i].charCodeAt() >= 65 && mensagem[i].charCodeAt() <= 90) {
          let testando = ((mensagem[i].charCodeAt()) - 65 - incrementa) % 26
          cn.push((testando < 0 ? testando + 26 : testando) + 65)
      } else if (mensagem[i].charCodeAt() >= 97 && mensagem[i].charCodeAt() <= 122) {
          let testando = ((mensagem[i].charCodeAt()) - 97 - incrementa) % 26
          cn.push((testando < 0 ? testando + 26 : testando) + 97)
      } else {
        cn.push(mensagem[i].charCodeAt())
      }
  }
  for (var j = 0; cn.length > j; j++) {
    msgCodificada.push(String.fromCharCode(cn[j]))
  }
  return msgCodificada.join('')
}

