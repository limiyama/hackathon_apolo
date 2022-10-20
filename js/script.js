$('input:radio[name="opcao"]').change(function() {
  if ($(this).val() == 'deficiente') {
    $("#campoDeficiente").attr("hidden", false);
    $(this).attr("checked", true);
    
    $("#campoFarmaceutico").attr("hidden", true);
    $(this).attr("checked", true);
    
  } else if ($(this).val() == 'farmaceutico') {
    $("#campoFarmaceutico").attr("hidden", false);
    $(this).attr("checked", true);
    
    $("#campoDeficiente").attr("hidden", true);
    $(this).attr("checked", true);
  }
});

function salvarPessoa(){
  var tipoD = document.getElementById("tipoDef").value;
  var celularD = document.getElementById("celDef").value;

  // Pega a lista já cadastrada, se não houver vira um array vazio
  var lista_pessoas = JSON.parse(localStorage.getItem('lista-pessoas') || '[]');
  // Adiciona pessoa ao cadastro
  lista_pessoas.push({
      tipoD: tipoD,
      celularD: celularD
  });

  // Salva a lista alterada
  localStorage.setItem("lista-pessoas", JSON.stringify(lista_pessoas));

  console.log('Salva com sucesso.');
}