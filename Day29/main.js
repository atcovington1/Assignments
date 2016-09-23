var token = "xoxp-63743851541-69571800385-83170275939-f58e4580adb5cca0094b686ed33d3076"  
var msg = "HAPPY FRIDAY!!"

$(document).ready(function(){
	getchannels();


	
	$("button").click(function() {
      var message = $("#msgbox").val();
      var radio = $('input[name=channelRadioButtons]:checked').val();

      console.log(message);

		  $.ajax("https://slack.com/api/chat.postMessage",
		 {
		    data: {
		      token: token,
		      channel: radio,
		      text: message
		  }
		}).then(function(postMessage){
		  console.log(postMessage)
		 });
	});

});
function getchannels(){

	console.log("successful call getchannels");
 $.ajax("https://slack.com/api/channels.list",
		 {
		    data: {
		      token: token
		  }

		}).then(function(channelList) {
		  console.log(channelList);
		  console.log(channelList.channels[0].name);
		  var form = $("#channelButtons");
		  for (var i = 0; i < channelList.channels.length; i++) {
		  	var chname = channelList.channels[i].name;
		    var item = $("<p><input type='radio' value='" + chname  + "' name ='channelRadioButtons'>"+chname+"</input> </p>");

		  	form.append(item);

		  };
		 });

};