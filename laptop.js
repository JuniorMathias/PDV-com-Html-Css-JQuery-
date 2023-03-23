const select1 = document.getElementById('select01')
const select2 = document.getElementById('select02')
const select3 = document.getElementById('select03')
const select4 = document.getElementById('select04')
const input = document.getElementById('Resultado')


alert(select1)

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



function comprar(){
    var valor = (localStorage.getItem("arquivo1"));
    document.getElementById('cliente').innerHTML = valor;
    document.getElementById('client').innerHTML = input.value;
}