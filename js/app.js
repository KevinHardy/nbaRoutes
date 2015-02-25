var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  //router here
  $routeProvider
  .when('/', {
  	templateUrl: 'js/home/homeTmpl.html',
  	controller: 'mainCtrl',
  	/*resolve: {
  		allData: function($route, homeService)
  			return homeService.getAllData();
  	}*/
  })
  .when('/teams/:team', {
  	templateUrl: 'js/teams/teamTmpl.html',
  	controller: 'teamCtrl',
  	resolve: {
  		teamData: function($route, teamService) {
  			return teamService.getTeamData();
  		}
  	}
  })
  .otherwise('/');

  //resolve object tells site to return promise, so wait till info finishes loading before displaying view
});