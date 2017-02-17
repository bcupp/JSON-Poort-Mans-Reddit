$(function() {

  $.get('https://www.reddit.com/r/aww/top.json').done(function(responseBody){
    responseBody.data.children.forEach(function(children){
      var author = children.data.author;
      var title = children.data.title;
      var img = children.data.preview.images[0].source.url;
      $('body').append($('<div>').html('<div>'+author+'<img src="'+img+'"/>'+title+'</div>'));
    })
  });








});
