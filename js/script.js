$(function() {

  $.get('https://www.reddit.com/r/aww/.json').done(function(responseBody){
    console.log('DONE', responseBody.data.children[0].data.title);
  })


});
