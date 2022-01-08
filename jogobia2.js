function btn (){
    function FazerBolo (escolha){
        
    
        
        if ( escolha == "2") {
             window.location.href="parabénsbia2.html";
        }
        else {
           window.location.href="gameover.html";
        }
    }
    var  escolha = prompt ("digite a opção correta;");
    FazerBolo (escolha );
}