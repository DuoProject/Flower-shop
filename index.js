var images = [["./photos/flower1.jpg", "<h2 id='flow0' class='title-imgg'>Pink Roses</h2>", "card1"], ["./photos/flower2.jpg", "<h2 id='flow1' class='title-imgg'>Pink Bouquet</h2>",  "card2"], ["./photos/flower3.jpg", "<h2 id='flow2' class='title-imgg'>Black Cover</h2>",  "card3"], ["./photos/flower4.jpg", "<h2 id='flow3' class='title-imgg'>Eart Roses</h2>",  "card4"], ["./photos/flower5.jpg", "<h2 id='flow4' class='title-imgg'>Red Roses</h2>",  "card5"], ["./photos/flower6.jpg", "<h2 id='flow5' class='title-imgg'>Yellow Roses</h2>",  "card6"], ["./photos/flower7.jpg", "<h2 id='flow6' class='title-imgg'>White Flowers</h2>",  "card7"], ["./photos/flower8.jpg", "<h2 id='flow7' class='title-imgg'>Purple Roses</h2>",  "card8"], ["./photos/flower9.jpg", "<h2 id='flow8' class='title-imgg'>Purple Roses' Bouquet</h2>",  "card9"], ["./photos/flower10.jpg", "<h2 id='flow9' class='title-imgg'>White Roses</h2>",  "card10"], ["./photos/flower11.jpg", "<h2 id='flow10' class='title-imgg'>Purple and White Roses</h2>",  "card11"], ["./photos/flower12.jpg", "<h2 id='flow11' class='title-imgg'>Orange Flowers</h2>",  "card12"]]
var flowers = {}
for(var i = 0; i < images.length; i++) {
    $("#cards").append("<div id=" + "" +  images[i][2] + " class='card'><img class='flower-img' src='"+ images[i][0] + "'></img></div>")
    
    
}
var totalPrice = 0
for ( var j = 0; j < images.length; j++) {
    $("#" + images[j][2]).append(images[j][1])
    // I tried to get the card's title ID to bring the name with it so when I clock on the button to add a price, I increment the counter 
    // to display the name of the flowers that I chosed
    var currentId = "flow" + j
    var myFlower = $("#" + currentId).html()
    console.log(myFlower);
    flowers[myFlower] = 0
    console.log(flowers);
}

$(".cart-div").append("<div id='cart-container'></div>")
$("#cart-container").append("")
var prices = [160,90, 120, 80, 250,70, 165, 240, 53, 77, 98, 199]
function getPrice() {
    for ( var y = 0; y < prices.length; y++) {
        $("#" + images[y][2]).append("<label class='price'>price: $" + prices[y] + "</label>")
        $("#" + images[y][2]).append("<button class='btn ' id=" + "" + prices[y] + ">Add To Cart</button>")
        $("#" + prices[y]).on("click", function () {
            var nmPrice = parseInt(event.target.id)
            totalPrice += nmPrice
            console.log(totalPrice);
            var val =  $("#price-nob").text()
            var valueToNumber = parseInt(val)
            $("#price-nob").text(valueToNumber+= totalPrice)
        })
    }

$("body").append("<div class='cart-div'></div>")
$(".cart-div").append("<h3>Here is the total price of your flowers</h3>")
if(totalPrice !== 0) {

    $(".cart-div").append("<span>Total Price: " + totalPrice + "</span>")
}
}
getPrice()
$("#basket").on("click", function () {
    $("#cards").fadeOut()
    setTimeout(function() {
        $(".cart-div").fadeIn()
    },
       500 )
    
    
})
$(".logo").on("click", function () {
    $(".cart-div").fadeOut()
    setTimeout(function() {
        $("#cards").fadeIn()
    },
       500 )
})
