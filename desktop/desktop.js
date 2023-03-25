const select1 = document.getElementById('select01')
const input = document.getElementById('Resultado')

//somando os valores do input 

const ChangeInput = () => {
    const res = Number(select1.value)
    input.value = res
}

// Quando a página for atualizada o input não ficar vazio
const res = Number(select1.value)
input.value = res

select1.onchange = ChangeInput


//mostrando valores quando finalizado a compra
function comprar(){

    //pegando o texto dos options e jogando na table
    
    let cliente = (localStorage.getItem("arquivo1"));
    document.getElementById('cliente').innerHTML = cliente.toUpperCase();
    document.getElementById('precoMonitor').innerHTML = select1.options[select1.selectedIndex].text;
  
    document.getElementById('SOS').innerHTML = select1.value;


    document.getElementById('valor').innerHTML = input.value;
    
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
  $('#valorMonitor').css('display','block')
	$('#valorMonitor').html(valor);
});


// função para alterar imagem de acordo com o que é pedido


$(document).ready(function() {
  $('.monitor').hide();
  $('#sumir').show();

  $('#select01').change(function() {
    $('.monitor').hide();
    $('#' + $(this).val()).show();
  })

});

