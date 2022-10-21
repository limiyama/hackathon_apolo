//particlesJS.load('particles-js', 'particlesjs-config.json', function() {
//  console.log('callback - particles.js config loaded');
//});

function cadastrarD() {
  let defCadastrados = localStorage.defLogin ? JSON.parse(localStorage.defLogin) : [];
  const defData = {
      email: document.getElementById('cadastroEmail').value,
      password: document.getElementById('cadastroSenha').value
  };
  defCadastrados.push(defData);
  localStorage.setItem('defLogin', JSON.stringify(defCadastrados));

  //
  const r1 = document.getElementById('remedioD1').value
  let defRemedios = [];
  defRemedios.push(r1);
  localStorage.setItem('defRemedio', JSON.stringify(defRemedios));

}

function cadastrarF() {
  let farCadastrados = localStorage.farLogin ? JSON.parse(localStorage.farLogin) : [];

  const farData = {
      nome: document.getElementById('cadastroNome').value,
      password: document.getElementById('cadastroSenha').value
  };

  farCadastrados.push(farData);
  localStorage.setItem('farLogin', JSON.stringify(farCadastrados));

  //
  const rA = document.getElementById('remedioF1').value
  let farRemedios = [];
  farRemedios.push(rA);
  localStorage.setItem('farRemedios', JSON.stringify(farRemedios));

}

function loginDef() {
  const loginEmail = document.getElementById('emailLogin').value
  const loginSenha = document.getElementById('senhaLogin').value
  if (localStorage.getItem('defLogin')) {
      const todosUserCadastro = JSON.parse(localStorage.getItem('defLogin'));
      const matchedUser = todosUserCadastro.filter(user => {
          return loginEmail === user.email && loginSenha === user.password;
      })
      if (matchedUser.length) {
          alert('Login feito com sucesso')
          return location.replace("pages/inicioD.html");
      } else {
          alert('Erro')
      }
  } else {
      aler('Erro') // Don't say "Not a registered user"
  }
}

function loginFar() {
  const loginEmail = document.getElementById('emailLogin').value
  const loginSenha = document.getElementById('senhaLogin').value

  if (localStorage.getItem('farLogin')) {
      const todosUserCadastro = JSON.parse(localStorage.getItem('farLogin'));
      const matchedUser = todosUserCadastro.filter(user => {
          return loginEmail === user.nome && loginSenha === user.password;
      })
      if (matchedUser.length) {
          alert('Login feito com sucesso')
          return location.replace(" inicioF.html");
      } else {
          alert('Erro')
      }
  } else {
      aler('Erro') // Don't say "Not a registered user"
  }
}

function pesquisarFarmacia() {
    const nomeFarmacia = document.getElementById('nomeFarm').value

    if (localStorage.getItem('farLogin')) {

    const farmaciaCadastrada = JSON.parse(window.localStorage.getItem('farLogin'));
    const remediosFCadastrados = JSON.parse(window.localStorage.getItem('farRemedios'));


    const farmaciaEncontrada = farmaciaCadastrada.filter(user => {
        return nomeFarmacia === user.nome;
    })
    if (farmaciaEncontrada.length) {
        $('#modalPFarm').modal('show');
        
        document.getElementById('nmFarm').innerHTML = nomeFarmacia;
        //document.getElementById('remedioFDisponivel').innerHTML = JSON.stringify(remediosFCadastrados)


        document.getElementById('remedioFDisponivel').innerHTML = remediosFCadastrados.join(', ');
    } else {
        alert('Erro')
        console.log(nomeFarmacia, window.localStorage.getItem('farLogin'));
    }
 }
}

function pesquisarRemedio() {
    const nomeRemedio = document.getElementById('nomeFRem').value
    const remedioCadastrado = JSON.parse(window.localStorage.getItem('farRemedios'));

    //
    
    if (localStorage.getItem('farRemedios')) {

    const achouRemedio = remedioCadastrado.filter(user => 
            user === nomeRemedio
        )
    if (achouRemedio.length) {
        $('#modalRemeFarm').modal('show');
        
        document.getElementById('remedioFPesquisado').innerHTML = nomeRemedio;
    } else {
        alert('Erro')
        console.log(nomeRemedio, remedioCadastrado, window.localStorage.getItem('farRemedios'));
    }
 }
}

function apagarRemedio(){

            const deletedRemedio= document.getElementById('nomeFRem').value
            let remediosD = JSON.parse(localStorage.getItem("farRemedios"));
         
            remediosD = remediosD.filter(prodId => prodId !== deletedRemedio);
         
            localStorage.setItem("farRemedios", JSON.stringify(remediosD));
         alert('deletou')
}

function addRemedio(){
        const add_item = document.getElementById('nomeFRem').value

        // parse existing storage key or string representation of empty array
        var remediosExistentes = JSON.parse(localStorage.getItem("farRemedios") || '[]');
      
        // Add item if it's not already in the array, then store array again
        if (!remediosExistentes.includes(add_item)) {
          remediosExistentes.push(add_item);
          localStorage.setItem("farRemedios", JSON.stringify(remediosExistentes));
        }else{
           // or tell user it's already there
           console.log(add_item + ' ja adicionou')
        }
      }

function addRemedioDef(){
        const add_item = document.getElementById('nomeDRem').value

        // parse existing storage key or string representation of empty array
        var remediosExistentes = JSON.parse(localStorage.getItem("defRemedio") || '[]');
      
        // Add item if it's not already in the array, then store array again
        if (!remediosExistentes.includes(add_item)) {
          remediosExistentes.push(add_item);
          localStorage.setItem("defRemedio", JSON.stringify(remediosExistentes));
        }else{
           // or tell user it's already there
           console.log(add_item + ' ja adicionou')
        }
      }

function apagarRemedioDef(){

        const deletedRemedio= document.getElementById('nomeDRem').value
        let remediosD = JSON.parse(localStorage.getItem("defRemedio"));
     
        remediosD = remediosD.filter(prodId => prodId !== deletedRemedio);
     
        localStorage.setItem("defRemedio", JSON.stringify(remediosD));
     alert('deletou')
}

function pesquisarRemedioDef() {
    const nomeRemedio = document.getElementById('nomeDRem').value
    const remedioCadastrado = JSON.parse(window.localStorage.getItem('defRemedio'));

    //
    
    if (localStorage.getItem('defRemedio')) {

    const achouRemedio = remedioCadastrado.filter(user => 
            user === nomeRemedio
        )
    if (achouRemedio.length) {
        $('#modalRemeDef').modal('show');
        
        document.getElementById('remedioDPesquisado').innerHTML = nomeRemedio;
    } else {
        alert('Erro')
        console.log(nomeRemedio, remedioCadastrado, window.localStorage.getItem('defRemedio'));
    }
 }
}

// def
const listaRem = JSON.parse(window.localStorage.getItem('defRemedio'));
console.log(listaRem)
document.getElementById('remedios-def').innerHTML = listaRem.join(', ');
    