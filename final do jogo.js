function btn (){
    function FazerBolo (escolha){
        
    
        
        if ( escolha == "2") {
             window.location.href="finalvenceu.html";
        }
        else {
           window.location.href="finalperdeu.html";
        }
    }
    var  escolha = prompt ("digite a opção correta;");
    FazerBolo (escolha );
    }
    