$(document).ready(function(){
 $('#add').click(function(){
    $('#cs').after("<li>cyber security</li>")
 })
 $('#add').dblclick(function(){
     $('#cs').before("<li>AI</li>")
 })

 $('.dplist ul').prepend("<li>Hacking</li>")
 $('.dplist ul').append("<li>Cracking windows</li>")
 $('.dplist ul li').even().css("background-color","red")

$('.dplist li').dblclick(function(){
  $(this).fadeOut(500,function(){$(this).remove()})
})

$('.dplist ul li').hover(
  function (){ $(this).css("background-color","green")},
  function (){ $(this).css("background-color","")}
)
})