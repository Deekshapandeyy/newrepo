$(document).ready(function(){
$("#bag1").click(function(){
   let val=$("#bag1").val();
   if(val=='small')
   {
    $("#bagsize").html(1000);
   }
   else if(val=='medium')
   {
    $("#bagsize").html(2000);
   }
   else if(val=='large')
   {
    $("#bagsize").html(3000);
   }

});

    $("#bag2").click(function(){
        let val=$("#bag2").val();
        if(val=='light gray')
        {
         $("#shirt1").html(1200);
        }
        else if(val=='black')
        {
         $("#shirt1").html(1500);
        }
        else if(val=='blue')
        {
         $("#shirt1").html(1700);
        }
     


});
$("#btn12").click(function(){
$("#original1").clone().appendTo("#original2");
})

});