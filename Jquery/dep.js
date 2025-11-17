// let Cs = $(".cs")
// let It = $("#it")
// let mydep = $(".deplist")
// console.log(mydep)
//  $("h1").text("This is the list of departments") 
// console.log($("h1"))

// $("li").first().css("background-color","green")
// $("li").last().css("background-color","green")
$(".deplist ul").prepend("<li>Data sciences</li>")
$(".deplist ul").append("<li>information system</li>")
$(".deplist #it").before("<li>Artificial Intelligence<li>")
$(".deplist #it").after("<li>Cyber Security<li>")
$("li").even().css("background-color","green")
$("li").odd().css("background-color","yellow")
$("li").css("padding","10px")

$(document).ready(function(){
    $("#addButton").click(function(){
        $(".deplist ul").append("<li>Mechanical Engineering</li>")
    })
    $(".deplist ul")
     .on("mouseenter","li",function(){$(this).css("color","red");
     })
    $(".deplist ul")
     .on("mouseleave","li",function(){$(this).css("color","");
     })
    $(".deplist ul").dblclick("li",function(){
        $(this).fadeOut(500,function(){
            $(this).remove();
        })
    })
    $("#numInput").on("keyup", function() {
    const value = $(this).val();
    if (value === "") {
    $("#msg").text("");
    } else if (isNaN(value)) {
    $("#msg").text("Only numbers are allowed").css("color", "red");
    } else {
    $("#msg").text("Valid number").css("color", "green");
    }
    });
})
