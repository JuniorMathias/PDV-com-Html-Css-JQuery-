const select1 = document.getElementById('select01')
const select2 = document.getElementById('select02')
const select3 = document.getElementById('select03')
const select4 = document.getElementById('select04')

const select5 = document.getElementById('select05')
const input = document.getElementById('Resultado')

//somando os valores do input 

const ChangeInput = () => {
  const res = Number(select1.value) + Number(select2.value) + Number(select3.value) + Number(select4.value) + Number(select5.value)
    input.value = res + "$"
}

// Quando a página for atualizada o input não ficar vazio
const res = Number(select1.value) + Number(select2.value) + Number(select3.value) + Number(select4.value) + Number(select5.value)
input.value = res + "$"

select1.onchange = ChangeInput
select2.onchange = ChangeInput
select3.onchange = ChangeInput
select4.onchange = ChangeInput
select5.onchange = ChangeInput


//mostrando valores quando finalizado a compra
function comprar(){

    //pegando o texto dos options e jogando na table
    
    let cliente = (localStorage.getItem("arquivo1"));
    document.getElementById('cliente').innerHTML = cliente.toUpperCase();

    document.getElementById('cpu').innerHTML = select1.options[select1.selectedIndex].text;
    document.getElementById('memoria').innerHTML = select2.options[select2.selectedIndex].text;
    document.getElementById('hd').innerHTML = select3.options[select3.selectedIndex].text;
    document.getElementById('so').innerHTML = select4.options[select4.selectedIndex].text;
    document.getElementById('precoMonitor').innerHTML = select5.options[select5.selectedIndex].text;

    document.getElementById('SOS').innerHTML = select1.value;
    document.getElementById('mem').innerHTML = select2.value;
    document.getElementById('hds').innerHTML = select3.value;
    document.getElementById('sis').innerHTML = select4.value;
    document.getElementById('mon').innerHTML = select5.value;

    
}

// Mostrar extrato da compra após finalizar
$("#comprar").click(function(e){
   e.preventDefault(); 
   $("#center").toggle();
   $('#tabela').css('display', 'block');
});

//mostrar valores dinamicamente quando selecionar o item

$('#select01').change(function(){
	var valor = $('#select01').val();
  $('#valorCPU').css('display','block')
	$('#valorCPU').html(valor  + '$');
});

$('#select02').change(function(){
	var valor = $('#select02').val();
  $('#valorMemoria').css('display','block')
	$('#valorMemoria').html(valor  + '$');
});

$('#select03').change(function(){
	var valor = $('#select03').val();
  $('#valorHD').css('display','block')
	$('#valorHD').html(valor + '$');
});

$('#select04').change(function(){
	var valor = $('#select04').val();
  $('#valorSO').css('display','block')
	$('#valorSO').html(valor + '$');
});

$('#select05').change(function(){
	var valor = $('#select05').val();
  $('#valorMonitor').css('display','block')
	$('#valorMonitor').html(valor + '$');
});


// função para alterar imagem de acordo com o que é pedido


$(document).ready(function() {
  $('.cpu').hide();
  $('#sumir').show();

  $('.memo').hide();
  $('#sumirMemo').show();

  $('.hds').hide();
  $('#sumirHd').show();

  $('.so').hide();
  $('#sumirSo').show();

  $('.monitor').hide();
  $('#sumirMonitor').show();


  $('#select01').change(function() {
    $('.cpu').hide();
    $('#' + $(this).val()).show();
  })

  $('#select02').change(function() {
    $('.memo').hide();
    $('#' + $(this).val()).show();
  })

  $('#select03').change(function() {
    $('.hds').hide();
    $('#' + $(this).val()).show();
  })

  $('#select04').change(function() {
    $('.so').hide();
    $('#' + $(this).val()).show();
  })

  $('#select05').change(function() {
    $('.monitor').hide();
    $('#' + $(this).val()).show();
  })

});

