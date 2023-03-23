const select1 = document.getElementById('select01')
const select2 = document.getElementById('select02')
const select3 = document.getElementById('select03')
const select4 = document.getElementById('select04')
const input = document.getElementById('Resultado')

//somando os valores do input 

const ChangeInput = () => {
    const res = Number(select1.value) + Number(select2.value) + Number(select3.value) + Number(select4.value)
    input.value = res
}

// Quando a página for atualizada o input não ficar vazio
const res = Number(select1.value) + Number(select2.value) + Number(select3.value) + Number(select4.value)
input.value = res

select1.onchange = ChangeInput
select2.onchange = ChangeInput
select3.onchange = ChangeInput
select4.onchange = ChangeInput


//mostrando valores quando finalizado a compra
function comprar(){
    //pegando o texto dos options
	let cpu = select1.options[select1.selectedIndex].text;
    let memoria =  select2.options[select2.selectedIndex].text;
    let hd = select3.options[select3.selectedIndex].text;
    let so = select4.options[select4.selectedIndex].text;
    
    let cliente = (localStorage.getItem("arquivo1"));
    document.getElementById('cliente').innerHTML = cliente;
    document.getElementById('cpu').innerHTML = cpu;
    document.getElementById('memoria').innerHTML = memoria;
    document.getElementById('hd').innerHTML = hd;
    document.getElementById('so').innerHTML = so;


    document.getElementById('valor').innerHTML = input.value;
    
}

$( "#center" ).submit(function( event ) {
    $('.container').css('display', 'none');
    $('#other').css('display', 'inline');
    event.preventDefault();
  });
  
  $( "#other" ).click(function() {
    $( "#center" ).submit();
  });

