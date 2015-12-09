//Problem: user when clicking on image goes to dead end
//Solution: create an overlay with a large image - Lightbox

var $lightbox = $("<div id='lightbox'></div>"),
    $overlay = $("<div id='overlay'></div>"),
    $content = $("<div id='content'></div>"),
    $image = $("<img>"),
    $caption = $("<p></p>");

$lightbox.append($content, $overlay);
$content.append($image);
$content.append($caption);
$("body").append($lightbox);

$("#imageGallery img").click(function(e) {
  e.preventDefault();
  var imageLocation = $(this).attr("src"),
      captionText = $(this).attr("alt");
  
  $image.attr("src", imageLocation);
  $lightbox.show();
  $caption.text(captionText);
  
});

//When overlay is clicked 
$lightbox.click(function() {
  $(this).hide();
});


  
