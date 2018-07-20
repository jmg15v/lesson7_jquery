/* global $ */

//CSS- change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
 $(this).css("background-color", "yellow");
 }, function(){
 $(this).css("background-color", "pink");
});

//DOM- clone all elements nect to an h3 element
$("h3").next().clone().appendTo(“article”);

//Animation/event- add word that is centered on the page to recipe
$("div").append("< center>ENJOY!!</center>")
