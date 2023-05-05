$('#resumeButton').on('click', function() {
  alert("Thanks for downloading my resume!");
  var downloadLink = document.createElement('a');
  downloadLink.href = 'ChelseaSullivanResume.pdf';
  downloadLink.download = 'ChelseaSullivanResume.pdf';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});

$('button').on('mouseover', function() {
  // Change the background color of the button to royal blue
  $(this).css('color', 'royalblue');
});

// Add a mouseout event listener to all buttons on the page
$('button').on('mouseout', function() {
  // Change the background color of the button back to grey
  $(this).css('color', 'black');
});

$(document).ready(function() {
  $('.scrollable').addClass('scrollbar');
  $('.scrollbar').scrollbar();
});

