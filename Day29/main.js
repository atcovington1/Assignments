var token = "xoxp-63743851541-69571800385-82840715794-010f038ca8919b46292089f606496197"  
var msg = "HAPPY FRIDAY EVE!!"

$.ajax("https://slack.com/api/chat.postMessage",
 {
    data: {
      token: token,
      channel: "#SLACKBOTS",
      text: msg
  }



	}).then(function(result) {
	  console.log(result);

	});

