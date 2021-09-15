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

function IncreaseHeader(){
	//Get the tag you want to change
	var headerTag = document.getElementById('acessibilidade');
	
	// Get the current font size
	var currentFontSize = headerTag.style.fontSize;
	
	//Take out the px in the end
	currentFontSize = currentFontSize.slice(0, -2);
	
	//Make currenFontSize an Integer
	currentFontSize = parseInt(currentFontSize);
	
	//Make new font size while increase currenFontSize by 1
	var newFontSize = currentFontSize + 1;
	
	//Make newFontsize a string and add px in the end
	newFontSize = newFontSize.toString() + "px";
	
	//Set new style
	headerTag.style.fontSize = newFontSize;
}

function DecreaseHeader(){
	//Get the tag you want to change
	var headerTag = document.getElementById('acessibilidade');
	
	// Get the current font size
	var currentFontSize = headerTag.style.fontSize;
	
	//Take out the px in the end
	currentFontSize = currentFontSize.slice(0, -2);
	
	//Make currenFontSize an Integer
	currentFontSize = parseInt(currentFontSize);
	
	//Make new font size while decrease currenFontSize by 1
	var newFontSize = currentFontSize - 1;
	
	//Make newFontsize a string and add px in the end
	newFontSize = newFontSize.toString() + "px";
	
	//Set new style
	headerTag.style.fontSize = newFontSize;
}