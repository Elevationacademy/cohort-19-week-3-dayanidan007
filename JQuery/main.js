
//Exercise 1 

const addHuman = function () {
    let name = $("#name").val()
    $("#list").append(`<li class=some> ${name} </li>`);
}
$("button").on("click", addHuman)

//Exercise 2 

$("ul").on("click","li",function(){
    $(this).remove()
})

//Exercise 3 

$("body").append("<div class=box id=b1> </div>")
$("body").append("<div class=box id=b2> </div>")

$("#b2").hover(function(){
    $("#b1").css("background-color","red")},function(){$("#b1").css("background-color","#8e44ad")})


    $("#b1").hover(function(){
        $("#b2").css("background-color","red")},function(){$("#b2").css("background-color","#8e44ad")})

//Exercise 4 

$(".item").on("click",function(){ 
    const chek =$(this).data().instock
    if(chek == true){
    let texting = $(this).text()
    $("#cart").append(`<div class=cart-item> ${texting} </div>`)}})

//Exercise 5 
const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]
  
  for(let i=0 ; i < fruits.length;i++){
      $("#basket").append(`<div class= ${fruits[i].color}>${fruits[i].name}</div>`)
  }


//Extensions - Color Picker

$("span").addClass("picker")
$("span").css("background-color",function(){ return $(this).data().color})

$("span").on("click",function(){
    $(".box").css("background-color",$(this).data().color)})



