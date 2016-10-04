angular.module("AppMod", [])
	.controller("AppCtrl", ["$http", function($http){
		var self = this;

		$http.get("http://localhost:8080/student")
				.then(function(resp) {
					self.students = resp.data;

				}, function(err) {
				});

	}]); //end controller
