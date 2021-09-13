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