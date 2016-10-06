angular.module("AppMod", ["ngRoute"])
	.controller("AppCtrl", ['$http','$routeParams', function($http, $routeParams) {
		var self = this;
		self.id = $routeParams.studentId;

		self.hide = function(x){
			
				for(var std of self.students) {
					if(std.id==x){
					std.vis = false;
				}
			}
		};
		self.refresh = function(){
		for(var std of self.students) {
				
					std.vis = true;
				}

	};

		$http.get('http://localhost:8080/student')
			.then(function(resp){
				self.students = resp.data;
				for(var s of self.students) {
					s.vis = true;
				}
				console.log(self.students);
			},function(err) {

			});

		$http.get('http://localhost:8080/student/' + self.id)
			.then(function(resp){
				self.students = resp.data;
			},function(err) {
			});

	}])
	.config(['$routeProvider', function($routeProvider) {

   		$routeProvider
		.when('/', {
			templateUrl: 'views/home.view.html'

		}).when('/student', {
			templateUrl: 'views/student.view.html',
			controller: 'AppCtrl',
			controllerAs: 'ctrl'

		}).when('/student/:studentId', {
			templateUrl: 'views/detail.view.html',
			controller: 'AppCtrl',
			controllerAs: 'ctrl'


		}).when('/about', {
			templateUrl: 'views/about.view.html'

		})
		.otherwise({redirectTo: '/'});

	}]); // end config
