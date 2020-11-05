

const posts = [
    {name: "Uncle jerome",text:"Happy birthday kido!"},
    {name: "BFF Chariene",text:"HEARTS LOVE YOU"}
]

const render = function(){
    for(post of posts){
        $("#wall").append(`<div class=friend> <b>${post.name}:</b> ${post.text}</div>`)
    }
}

render()

$("#btn").on("click",function(){
    posts.push({name:$("#name").val(),text: $("#text").val()})
    $("#wall").empty()
    render()
})

///Need to do the challnge to remove the post !!