var cod = document.querySelector('#codificar');
var decod = document.querySelector('#decod');
var enter = document.querySelector('#msg');
var exit = document.querySelector('#return');
var sc = document.querySelector('#selection')
var bt = document.querySelector('#botaoCod');



cod.addEventListener("click", function(){
  bt.innerText = "Codificar Mensagem"
})

decod.addEventListener('click', function(){
  bt.innerText = "Decodificar Mensagem";
})


bt.addEventListener('click', (function (s) {
  s.preventDefault();
  criptografar(enter.value) 
}))

function criptografar(texto) {
  if (sc.value == 'base64' && bt.innerText == 'Codificar Mensagem') {
    var resultCripto64 = btoa(texto);
    exit.value = resultCripto64;
  } else if (sc.value == 'cifraDeCesar' && bt.innerText == 'Codificar Mensagem') {
    var resultCesar = codificarCesar(enter.value);
    exit.value = resultCesar;
  } else if (sc.value == 'base64' && bt.innerText == 'Decodificar Mensagem') {
    var resultDecripto64 = atob(texto) 
   exit.value = resultDecripto64;
  } else if (sc.value == 'cifraDeCesar' && bt.innerText == 'Decodificar Mensagem') {
    var resultDecriptoCesar = decodificarCesar(enter.value);
    exit.value = resultDecriptoCesar;
  } 
}

sc.addEventListener('change', function(){
    if (sc.value == '0' || sc.value == 'base64') {
      document.querySelector('.incr').style.display = 'none';
    } else {
      document.querySelector('.incr').style.display = 'flex';
    }
  })
  