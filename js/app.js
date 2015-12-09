//Problem: user when clicking on image goes to dead end
//Solution: create an overlay with a large image - Lightbox

var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//add image
$overlay.append($image);
//add caption
$overlay.append($caption);

//Add overlay
$("body").append($overlay);

  
  

//Capture click event on a link to an image
$("#imageGallery a").click(function(e) {
  e.preventDefault();
  var imageLocation = $(this).attr("href");
  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  
  //Update with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay
  $overlay.show()
 
  $caption.text(captionText);
  
});

  

//When overlay is clicked 
$overlay.click(function () {
  //Hide overlay
  $overlay.hide();
});

  
