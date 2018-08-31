
    $("section").css("display", "none");
 
    $("section").fadeIn(1000);

    
    $("a.transition").click(function(event){
        event.preventDefault();
        
        linkLocation = this.href;
        $("section").fadeOut(400, redirectPage);      
    });
         
    function redirectPage() {
        
        
        window.location = linkLocation;
    }



