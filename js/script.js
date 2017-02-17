$(function() {

  $.get('https://www.reddit.com/r/aww/top.json').done(function(responseBody){
    responseBody.data.children.forEach(function(children){
      var author = children.data.author;
      var title = children.data.title;
      var img = children.data.preview.images[0].source.url;
      $('#content').append($('<div>').addClass('row post text-center').html('<div class="col-md-12">'+'<h3>' +'"'+title+'"' +'</h3>'+author+'<img class="img-responsive center-block" src="'+ img+'"/>' +'</div>'));
    })
  });








});
