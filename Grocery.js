$(document).ready(function(){
		
  $(drag);
  var total_price=[];

  function drag(){
	  $(".groceries ol li").draggable({
		  cursor:"move",
		  containment:"document",
		  snap: ".bag",
	  });
	  $(".bag").droppable({
		  drop: bagDrop
	  });
  }

  function show_button(){
		$(".list ol").one("mouseenter", function(){
			$(".list").append("<button class='button'>Calculate!</button>");
				$('.button').on("click", function(){
					var lists=$(".something");
					var myTotal=0;
					for (var i=0; i<total_price.length;i++){
						myTotal+=total_price[i];
					 }
					 $(".list ol").append("<li>" + "Total:" + "$" +myTotal + "</li>");
				});
		});
	}
  show_button();

  function bagDrop(event, ui){
	  var draggable=ui.draggable;
		var draggable1=draggable.removeClass("ui-draggable-dragging").removeClass("ui-draggable");
		var food=draggable1.attr("class");
		var split=food.split(",");
		var food_name=split[0];
		var food_price=split[1];
		var number=parseFloat(food_price);
		$(".register p").remove();
		$(".register").append("<p>" + "$" + food_price + "</p>").show();
		$(".nothing").remove();
		$(".list ol").append("<li class='something'>" + food_name+ ": " + "$" + number + "</li>");
		
		total_price.push(number);
	}
});

