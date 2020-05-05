
//check off todolist
$("ul").on("click", "li", function(){
	$(this).toggleClass("complete");
});

//Click on trashcan span to delete Todo 
//Select parent(li)to remove the whole list; Noticed First(this) = span ; the second (this) = li
//Use stopPropagation to avoid event bubbling 
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut("400",function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Press enter key to add new list
//which = the key code of keypress
$("input[type='text']").keypress(function(event){
	if( event.which === 13 && $("input[type='text']").val().length>0){
		var todoText = $(this).val();
		$(this).val("");
		//creat a new li and add to ul; use method "append" to add html content
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});

//Press enterBtn  to add new list
$("button").click(function(){
	if($("input[type='text']").val().length>0){
		var todoText = $("input[type='text']").val();
		$("input[type='text']").val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");		
	}
})


//toggle plus logo and textInput after click plus
$("#toggleForm").click(function(){
	$(this).toggleClass("fa-plus-rotate");
	$("#enter").fadeToggle();
	$("input[type='text']").fadeToggle();
}); 