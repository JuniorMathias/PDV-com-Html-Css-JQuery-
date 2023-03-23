
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

//função para enviar valores para o localStorage
 function enviar(){
    const nome = document.querySelector("#nome").value;
  localStorage.setItem("arquivo1", nome);
}




