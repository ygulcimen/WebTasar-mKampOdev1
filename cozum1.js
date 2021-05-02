var basliklar = $("article > div > h2");
// görev 1
$("#gorev1 > button").one("click",function()
{
     
    for (let index = 0; index < 3; index++) {
        $("#gorev1 > ul").append($("<li>").text($("h2").eq(index).text()));
    }
});

// görev 2
$("#gorev2 > button").click(function()
{
     $("#gorev2 > input").val($("article > div > h2").length);
 
});

// görev 3
$("#gorev3 > button").click(function()
{
     $("#gorev3 > input").val($("article > h1").text());
 
});

// görev 4
$("#gorev4 > button").one("click", function()
{
    var paragrafs = $("article > div > p")
    for (let index = 0; index < paragrafs.length; index++) 
    {
        var metin = "(" + paragrafs.eq(index).text().length  + " karakter)" ;
        basliklar.eq(index).append(metin);
    }
});




// görev 5
$("#gorev5 > button").click(function()
{
    for (let index = 0; index < basliklar.length; index++) {
        if (index%2==0) {
            basliklar.eq(index).css("color","blue");
        }
        else
        {
            basliklar.eq(index).css("color","orange");
        }
    }
    $("h1").css("color","red");

});

// görev 6
$("#gorev6 > button").one("click", function()
{
    $("article > div").first().mouseover(function() {
        $(this).fadeOut();
    });

});

// görev 7
$("#gorev7 > button").one("click", function()
{
    var istenen = $("h2:contains('can')");
  
    for (let index = 0; index < istenen.length; index++) 
    {
        $("#gorev7 > ul").append($("<li>").text(istenen.eq(index).text()));
    }

});
// görev 8
$("#gorev8 > button").one("click", function()
{
    
    $.ajax({
        url: "lorem.html",
        type : "get",
        success: function(result)
        {
            
            $("article > div").eq(1).prepend("<p>" + result + "</p>");
            $("article > div").eq(1).prepend("<h2>" + "Lorem" + "</h2>");
        }
    });
});
    



// görev 9
$("article > div > h2 , article > h1").mouseover(function(){

    $("#gorev9 > input").val($(this).text());
});

// görev 10
$("#gorev10 > button").one("click", function()
{
    var myImage = $('<img/>');

    myImage.attr('width', 100);
    myImage.attr('height', 100);
    myImage.attr('src', "check.png");
    myImage.attr('style','position:fixed;right:20px;bottom:20px;');
    myImage.appendTo("body");
});