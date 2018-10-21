$("section").css("display", "none");
$("footer").css("display", "none");

$("section").fadeIn(1000);
$("footer").fadeIn(1000);


$("a.transition").click(function (event) {
    event.preventDefault();

    linkLocation = this.href;
    $("section").fadeOut(400, redirectPage);
    $("footer").fadeOut(400, redirectPage);
});

function redirectPage() {


    window.location = linkLocation;
}



/*$(".nastepny-slajd").click(function(){

    $("#mojeobrazySection").addClass("highlight");
    $(".opisZdjecia").addClass("textAppear");
});

$(".poprzedni-slajd").click(function(){
    
    $("#mojeobrazySection").addClass("highlight");
  
});*/
$(".opisZdjecia").addClass("textAppear");
$(".gal0").css("visibility", "visible");
$(".gal5").addClass("textDisappear");
$(".gal1").addClass("textDisappear");

$(".daneZdjecia").addClass("textAppear");
$(".dane0").css("visibility", "visible");
$(".dane5").addClass("textDisappear");
$(".dane1").addClass("textDisappear");


$('#carouselExampleIndicators').on('slide.bs.carousel', function (event) {
    $("#mojeobrazySection").addClass("highlight");

    var checkingSlideNo = event.to;

    if (checkingSlideNo == 0) {
        $(".gal0").removeClass("textDisappear");
        $(".gal1").addClass("textDisappear");
        $(".gal2").addClass("textDisappear");
        $(".gal3").addClass("textDisappear");
        $(".gal4").addClass("textDisappear");
        $(".gal5").addClass("textDisappear");
        $(".opisZdjecia").addClass("textAppear");
        $(".gal0").css("visibility", "visible");
        
        $(".dane0").removeClass("daneDisappear");
        $(".dane1").addClass("daneDisappear");
        $(".dane2").addClass("daneDisappear");
        $(".dane3").addClass("daneDisappear");
        $(".dane4").addClass("daneDisappear");
        $(".dane5").addClass("daneDisappear");
        $(".daneZdjecia").addClass("textAppear");
        $(".dane0").css("visibility", "visible");
        
    }

    if (checkingSlideNo == 1) {
        $(".gal1").removeClass("textDisappear");
        $(".gal0").addClass("textDisappear");
        $(".gal2").addClass("textDisappear");
        $(".gal3").addClass("textDisappear");
        $(".gal4").addClass("textDisappear");
        $(".gal5").addClass("textDisappear");
        $(".opisZdjecia").addClass("textAppear");
        $(".gal1").css("visibility", "visible");
        
        $(".dane1").removeClass("daneDisappear");
        $(".dane0").addClass("daneDisappear");
        $(".dane2").addClass("daneDisappear");
        $(".dane3").addClass("daneDisappear");
        $(".dane4").addClass("daneDisappear");
        $(".dane5").addClass("daneDisappear");
        $(".daneZdjecia").addClass("textAppear");
        $(".dane1").css("visibility", "visible");
    }
    if (checkingSlideNo == 2) {
        $(".gal2").removeClass("textDisappear");
        $(".gal0").addClass("textDisappear");
        $(".gal1").addClass("textDisappear");
        $(".gal3").addClass("textDisappear");
        $(".gal4").addClass("textDisappear");
        $(".gal5").addClass("textDisappear");
        $(".opisZdjecia").addClass("textAppear");
        $(".gal2").css("visibility", "visible");
        
        $(".dane2").removeClass("daneDisappear");
        $(".dane0").addClass("daneDisappear");
        $(".dane1").addClass("daneDisappear");
        $(".dane3").addClass("daneDisappear");
        $(".dane4").addClass("daneDisappear");
        $(".dane5").addClass("daneDisappear");
        $(".daneZdjecia").addClass("textAppear");
        $(".dane2").css("visibility", "visible");
    }
    if (checkingSlideNo == 3) {
        $(".gal3").removeClass("textDisappear");
        $(".gal0").addClass("textDisappear");
        $(".gal1").addClass("textDisappear");
        $(".gal2").addClass("textDisappear");
        $(".gal4").addClass("textDisappear");
        $(".gal5").addClass("textDisappear");
        $(".opisZdjecia").addClass("textAppear");
        $(".gal3").css("visibility", "visible");
        
        $(".dane3").removeClass("daneDisappear");
        $(".dane0").addClass("daneDisappear");
        $(".dane1").addClass("daneDisappear");
        $(".dane2").addClass("daneDisappear");
        $(".dane4").addClass("daneDisappear");
        $(".dane5").addClass("daneDisappear");
        $(".daneZdjecia").addClass("textAppear");
        $(".dane3").css("visibility", "visible");
    }
    if (checkingSlideNo == 4) {
        $(".gal4").removeClass("textDisappear");
        $(".gal0").addClass("textDisappear");
        $(".gal1").addClass("textDisappear");
        $(".gal2").addClass("textDisappear");
        $(".gal3").addClass("textDisappear");
        $(".gal5").addClass("textDisappear");
        $(".opisZdjecia").addClass("textAppear");
        $(".gal4").css("visibility", "visible");
        
        $(".dane4").removeClass("daneDisappear");
        $(".dane0").addClass("daneDisappear");
        $(".dane1").addClass("daneDisappear");
        $(".dane2").addClass("daneDisappear");
        $(".dane3").addClass("daneDisappear");
        $(".dane5").addClass("daneDisappear");
        $(".daneZdjecia").addClass("textAppear");
        $(".dane4").css("visibility", "visible");
    }
    if (checkingSlideNo == 5) {
        $(".gal5").removeClass("textDisappear");
        $(".gal0").addClass("textDisappear");
        $(".gal1").addClass("textDisappear");
        $(".gal2").addClass("textDisappear");
        $(".gal3").addClass("textDisappear");
        $(".gal4").addClass("textDisappear");
        $(".opisZdjecia").addClass("textAppear");
        $(".gal5").css("visibility", "visible");
        
        $(".dane5").removeClass("daneDisappear");
        $(".dane0").addClass("daneDisappear");
        $(".dane1").addClass("daneDisappear");
        $(".dane2").addClass("daneDisappear");
        $(".dane3").addClass("daneDisappear");
        $(".dane4").addClass("daneDisappear");
        $(".daneZdjecia").addClass("textAppear");
        $(".dane5").css("visibility", "visible");
    }

})

/*$("#startPage").hover(function () {
  
    for (var i = 1; i < 376; i++) {

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            
           var chosenColorNumber = letters[Math.floor(Math.random() * 16)];
            
            for (var i = 0; i < 6; i++) {
              color += chosenColorNumber;   
            }
            
            return color;
        }
      
        var ftTime = Math.floor(Math.random() * 5000);

        
            $('#smallSquare' + i).fadeOut(ftTime).css("backgroundColor", getRandomColor());     

    }
})*/


function mozaic() {
    
for (var i = 1; i < 376; i++) {

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            
           var chosenColorNumber = letters[Math.floor(Math.random() * 16)];
            
            for (var i = 0; i < 6; i++) {
              color += chosenColorNumber;   
            }
            
            return color;
        }
      
        var ftTime = Math.floor(Math.random() * 5000);

        
            $('#smallSquare' + i).fadeToggle(ftTime).css("backgroundColor", getRandomColor());   

    }
        
     
  
  

}
for (var i = 1; i < 10; i++) {

  mozaic();
  

}

$('#startPage').click(function(){
    mozaic();
})

