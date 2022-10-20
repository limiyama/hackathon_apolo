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