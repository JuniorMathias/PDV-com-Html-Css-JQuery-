const select1 = document.getElementById('select01')
const select2 = document.getElementById('select02')
const input = document.getElementById('Resultado')

const ChangeInput = () => {
    const res = Number(select1.value) + Number(select2.value)
    input.value = res
}
// Quando a página for atualizada o input não ficar vazio
const res = Number(select1.value) + Number(select2.value)
input.value = res

select1.onchange = ChangeInput
select2.onchange = ChangeInput