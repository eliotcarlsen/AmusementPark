$(function(){
  $("form").submit(function(){
    event.preventDefault();
    var height = $("#height").val();
    if (height === "Below 5\'"){
      $("p.short").show();
       $("h6.short").addClass("color");
    } else if (height === "Between 5\'1\" and 5\'11\""){
      $("p").show();
      $("h6.tall, h6.short").addClass("color");
    } else {
      $("p.tall").show();
      $("h6.tall").addClass("color");
    };
  });
});
