
$(document).ready(function () {
    let errorNome = $("<div class='msg' style='color:red; font-size:12px;'>").text('Nome obrigatório! ');
    let errorEmail = $("<div class='msg' style='color:red; font-size:12px;'>").text('Email obrigatório! ');
    let errorSenha = $("<div class='msg' style='color:red; font-size:12px;'>").text('Senha obrigatória! ');
   
   $("#formulario").validate({
       rules: {
          nome: {
             required: true
          },
          email: {
             required: true
          },
          senha: {
            required: true
          }
       },
       messages: {
          nome: {
             required: errorNome
          },
          email: {
             required: errorEmail
          },
          senha: {
             required: errorSenha
          }
       }
    });
 });

 function enviar()
{
    const tarefa = document.querySelector("#tarefa").value;
  localStorage.setItem("arquivo1", tarefa);
  console.log(tarefa);
}

function showLocalStorageData() {
    
  }

function comprar(){
    var valor = (localStorage.getItem("arquivo1"));
    document.getElementById('cliente').innerHTML = valor;
}


