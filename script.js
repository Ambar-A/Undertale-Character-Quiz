$("button").click(function() {

var preAge;
var prePreference;
var preHumanity;
var preJokes;
var preHeight;
 
var age = $(".age").val();
var preference = $(".preference").val();
var humanity = $(".humanity").val();
var jokes = $(".jokes").val();
var height = $(".height").val();

if ( age >18 && preference==="Love" && humanity==="No" && jokes==="Yes" && height==="Short") {
    
    $("body").html("<p class=second> Congrats! You're Sans, Papyrus' brother! He's a really weird guy; quite mysterious. But he loves a good bad dad joke :)</p>");

    
    

    }

// else if ( age >18 && preference==="Love" && humanity==="No" && jokes==="Yes" && height==="Tall") {
//     $("body").html("<p class=second> Congrats! You're Toriel! She's the best goat mom you could ever have :)</p>");
//     $(".toriel").show();
// }

// else if ( age >18 && preference==="Love" && humanity==="No" && jokes==="No") {
//     $("body").html("<p class=second>Congrats! You're Papyrus, San's brother! He loves spaghetti even theough he's a skeleton, and hates hate his brother's jokes </p>");
//     $(".papyrus").show();
// }

// else if ( age >18 && preference==="Hate") {
//     $("body").html("<p class=second>Congrats! You're Flowey, Asriel's alter ego! (The evil side of Asriel >:] ) So you're a villain :) Sorry :)</p>");
//     $(".flowey").show();
// }

// else if ( age < 18 && preference==="Hate") {
//     $("body").html("<p class=second>Congrats! You're Chara! They're the violent alter ego of the main character/player! Also a villain :)</p>");
//     $(".chara").show();
// }

// else if ( age < 18 && preference==="Love" && humanity==="Yes") {
//     $("body").html("<p class=second>Congrats! You're Frisk! Thery're the merciful alter ego of the main character/player! They wouldn't hurt a fly...</p>");
//     $(".frisk").css("display","block");
// }

// else if ( age < 18 && preference==="Love" && humanity==="No") {
//     $("body").html("<p class=second>Congrats! You're Asriel, Flowey's other half! You are a goat boy :) </p>");
//     $(".asriel").show();
// }

// else {
//     $("body").html("<p class=second>Whoops! Something went wrong... Be sure to check that you filled everything in and that you capitalized your answers!</p>");
// }

});


