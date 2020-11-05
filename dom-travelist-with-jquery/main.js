
$(".generator").on("click",function(){
    let processor = $(this).closest(".processor").attr("id")
    let dataId = $(this).closest(".computer").attr("data-id")
    let bus = $(this).closest(".computer").find(".BUS").text()
    console.log(`Processor ID: ${processor}`)
    console.log(`Computer's data-id: : ${dataId}`)
    console.log(`BUS: ${bus}`)
})

$(".validator").on("click",function(){
let generatorText = $(this).closest(".computer").find(".generator").text()
let mb = $(this).closest(".computer").find(".MB").text()
let qrs = $(this).closest(".computer").find(".QR")
console.log(`The Generator's Text: ${generatorText}`)
console.log(`The MB: ${mb}`)
qrs.each(function() {
    console.log("The QR: " +$( this ).text())});

})