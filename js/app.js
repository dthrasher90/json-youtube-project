alert ("js works");


/*  var searchApiUrl = 'https://www.googleapis.com/youtube/v3/search';
  var apiKey = 'AIzaSyDHEyizXx6ExuMfrpgqSP_5aTIoqmDhk4g';
  var youtubeUrl = 'https://www.youtube.com/watch?v=';

  var params = {
     part: 'snippet',
     key: 'AIzaSyDHEyizXx6ExuMfrpgqSP_5aTIoqmDhk4g',
     q: videosRetrieved*/

  $(document).ready(function(){


      var searchApiUrl = 'https://www.googleapis.com/youtube/v3/search';
      var apiKey = 'AIzaSyDHEyizXx6ExuMfrpgqSP_5aTIoqmDhk4g';
    var youtubeUrl = 'https://www.youtube.com/watch?v=';

      var params = {
         part: 'snippet',
         key: 'AIzaSyDHEyizXx6ExuMfrpgqSP_5aTIoqmDhk4g',
         q: query,
         format: 'json'
}


    $('#search-form').submit(function(event){
      event.preventDefault();
      var searchTerm = $('#query').val();
      console.log(searchTerm);

      $.getJSON('https://www.googleapis.com/youtube/v3/search' + searchTerm, function(data){
        showResults(data.Search);
      });
    });

  function showResults(results){
    var html = "";
    var i = 1;
    $.each(results, function(index,value){
      html += '<li>' + i + '' + value.Title + '</li>';
      console.log(value.Title);
      i++;
    });
    $('#search-results ul').html(html);
  }

});
