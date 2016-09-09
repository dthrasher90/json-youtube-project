
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
  var videoId = data.items[0].id.videoId;
  var title = data.items[0].snippet.title;
   console.log(data);
   console.log(title);
   console.log("videoID=", videoId);

   populateFields()
  var videoinfo = "<div>"+title+"</div>"+"<div>"+videoId+"</div>";
  $(".videoinfo").html(videoinfo)


//"-m6UKS1L0YQ"
 });


});


function populateFields(data){
  //var videoinfo = "<div>"+title+"</div>"+"<div>"+videoIdr+"</div>";
//  $(".videoinfo").html(videoinfo);

//https://www.youtube.com/watch?v=
}
}
getData()
