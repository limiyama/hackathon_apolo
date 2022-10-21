particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

function cadastrarD() {
  let defCadastrados = localStorage.defLogin ? JSON.parse(localStorage.defLogin) : [];
  const defData = {
      email: document.getElementById('cadastroEmail').value,
      password: document.getElementById('cadastroSenha').value
  };
  defCadastrados.push(defData);
  localStorage.setItem('defLogin', JSON.stringify(defCadastrados));

  let defRemedios = localStorage.defRemedio ? JSON.parse(localStorage.defRemedio) : [];
  const dRemedioData = {
      r1: document.getElementById('remedioD1').value,
      r2: document.getElementById('remedioD2').value
  };
  defRemedios.push(dRemedioData);
  localStorage.setItem('defRemedio', JSON.stringify(defRemedios));

}

function cadastrarF() {
  let farCadastrados = localStorage.farLogin ? JSON.parse(localStorage.farLogin) : [];
  const farData = {
      email: document.getElementById('cadastroEmail').value,
      password: document.getElementById('cadastroSenha').value
  };
  farCadastrados.push(farData);
  localStorage.setItem('farLogin', JSON.stringify(farCadastrados));
  window.location.reload();
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
          return loginEmail === user.email && loginSenha === user.password;
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

const mostrarRemedios = ()=> {
  let displayedRemedios='';
  var sum = 0;
  for (i = 0; i < defRemedios.length; i++){

       displayedRemedios += defRemedios[i] + "\n";

      //Store sum in localStorage and retrieve
       localStorage.setItem("remedios", JSON.stringify(sum));
       localStorage.getItem("remedios");
       //How do I display this in SUM
  };  
  document.getElementById("remedios-def").textContent = displayedRemedios;
  console.log(defRemedios[{r1, r2}])
}