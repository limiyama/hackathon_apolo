var remedios = [{}];
var usuariosCadastro = [{}];
var farmaciaCadastro = [{}];
var remediosFarmacia = [{}];

function cadastrarD() {
  var usuario = document.getElementById('cadastroEmail').value;
  var senha = document.getElementById('cadastroSenha').value;

  var remedio1 = document.getElementById('remedio1').value;
  var remedio2 = document.getElementById('remedio2').value;

  let usuariosCadastro = JSON.parse(localStorage.getItem('users'));
  if(usuariosCadastro) {
      usuariosCadastro.push({name: usuario, password: senha});
      localStorage.setItem('users', JSON.stringify(usuariosCadastro));
      console.log('foi', usuariosCadastro)
      localStorage.setItem('users', JSON.stringify([{name: usuario, password: senha}]));
  }

  let remedios = JSON.parse(localStorage.getItem('medicamento'));
  if(remedios) {
      remedios.push({r1: remedio1, r2: remedio2});
      localStorage.setItem('medicamento', JSON.stringify(remedios));
      console.log('foi os remedios', remedios)
      localStorage.setItem('medicamento', JSON.stringify([{r1: remedio1, r2: remedio2}]));
  }

  return location.replace("inicioD.html")
}

function cadastrarF() {
  var farmacia = document.getElementById('cadastroEmail').value;
  var senhaF = document.getElementById('cadastroSenha').value;

  var remedio1 = document.getElementById('remedio1').value;
  var remedio2 = document.getElementById('remedio2').value;

  let farmaciaCadastro = JSON.parse(localStorage.getItem('farmacias'));
  if(farmaciaCadastro) {
      farmaciaCadastro.push({name: farmacia, password: senhaF});
      localStorage.setItem('farmacias', JSON.stringify(farmaciaCadastro));
      console.log('foi', farmaciaCadastro)
      localStorage.setItem('farmacias', JSON.stringify([{name: farmacia, password: senhaF}]));
  }

  let remediosFarmacia = JSON.parse(localStorage.getItem('medicamentos'));
  if(remediosFarmacia) {
    remediosFarmacia.push({rf1: remedio1, rf2: remedio2});
      localStorage.setItem('medicamentos', JSON.stringify(remediosFarmacia));
      console.log('foi os remedios', remediosFarmacia)
      localStorage.setItem('medicamentos', JSON.stringify([{rf1: remedio1, rf2: remedio2}]));
  }

  return location.replace("inicioF.html")
}

function fazerLogin() {
  var usuario = document.getElementById('emailLogin').value;
  var senha = document.getElementById('senhaLogin').value;

  let usuariosCadastro = JSON.parse(localStorage.getItem('users'))
  if(usuariosCadastro) {  
      for (let i = 0; i < usuariosCadastro.length; i++){
          if (usuario == usuariosCadastro[i].name && senha == usuariosCadastro[i].password) {
              alert('login');
              return location.replace("pages/inicioD.html");
           }
      }
  } else {
      if(farmaciaCadastro) {
        for (let i=0; i < farmaciaCadastro.length; i++) {
          if (usuario == farmaciaCadastro[i].name && senha == farmaciaCadastro[i].password) {
            alert('login');
            return location.replace("pages/inicioF.html");
         }
        }
      }
  }

  return alert('errado');
}
