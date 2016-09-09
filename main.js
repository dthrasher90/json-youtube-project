alert("jdjdjd")


var apikey = "AIzaSyDHEyizXx6ExuMfrpgqSP_5aTIoqmDhk4g";
var searchURL = "https://www.googleapis.com/youtube/v3/search";

function getVideoName(){
  var videoName = $("#videoname").val();
  return videoName;

};

function getData(){
$("#getvideo").click(function(){
  var videoName = getVideoName();
  console.log(videoName);
  var data = {
   part: 'snippet',
   key: apikey,
   q: videoName,
 }

 $.getJSON(searchURL, data, function(data){
   console.log(data);
 });


});

function populateFields(data){
  var videoinfo = "<div>"+videoName+"</div>"+"<div>"+data.Year+"</div>";

  $(".videoinfo").html(videoinfo);

//https://www.youtube.com/watch?v=
}
}
getData()
