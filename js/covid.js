window.addEventListener('load', () => {
   function ObterTamanhoFonte(seletorComClasseAcessibilidade) {
       let tamanho = window.getComputedStyle(seletorComClasseAcessibilidade, null)
                       .getPropertyValue('font-size');
       return parseFloat(tamanho);
   }

   function ControlaTamanhoElementos(seletoresComClasseAcessibilidade, aumentar, normal)
   {
       for (let i = 0; i < seletoresComClasseAcessibilidade.length; i++) {
           const element = seletoresComClasseAcessibilidade[i];      
           let fontSizeAtual = 0;

           if (normal)
           {
               element.style.fontSize = '1em';
           }
           else
           {        
               if (aumentar)
                   fontSizeAtual = ObterTamanhoFonte(element) + 1;
               else
                   fontSizeAtual = ObterTamanhoFonte(element) - 1;            

               element.style.fontSize = fontSizeAtual.toString() + 'px'; 
           }
       } 
   }

   document.querySelector('#increase-plugin-ac').addEventListener('click', e => {
       let acessibilidade = document.getElementsByClassName('accessibility-plugin-ac');
       ControlaTamanhoElementos(acessibilidade, true);
   });

   document.querySelector('#normal-plugin-ac').addEventListener('click', e => {
       let acessibilidade = document.getElementsByClassName('accessibility-plugin-ac');
       ControlaTamanhoElementos(acessibilidade, null, true);
   });

   document.querySelector('#decrease-plugin-ac').addEventListener('click', e => {
       let acessibilidade = document.getElementsByClassName('accessibility-plugin-ac');
       ControlaTamanhoElementos(acessibilidade, false);
   });
});




function validate() { 
  if( document.myForm.Name.value == "" ) {
     alert( "Nome obrigatório" );
     document.myForm.Name.focus() ;
     return false;
  }
  if( document.myForm.EMail.value == "" ) {
     alert( "Email obrigatório" );
     document.myForm.EMail.focus() ;
     return false;
  }
  if( document.myForm.Genero.value == "-1" ) {
     alert( "Gênero obrigatório" );
     return false;
  }

  alert( "Mensagem enviada com sucesso" );
  return( true );
}
