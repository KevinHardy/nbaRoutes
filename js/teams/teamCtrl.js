var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){

	teamData = $scope.teamData;
	$scope.newGame = {
		homeTeam: $scope.homeTeam.toString().split(' ').join('').toLowerCase(),

	};

	$scope.ShowNewGameForm = false;
	$scope.toggleNewGameForm = function() {
		$scope.ShowNewGameForm = !$scope.ShowNewGameForm;
	}

	if ($routeParams === 'utahjazz') {
		$scope.homeTeam = 'Utah Jazz';
		$scope.logoPath = 'images/jazz-logo.png';
	} else if ($routeParams === 'losangeleslakers') {
		$scope.homeTeam = 'Los Angeles Lakers';
		$scope.logoPath = 'images/lakers-logo.png';
	} else if ($routeParams === 'miamiheat') {
		$scope.homeTeam = 'Miami Heat';
		$scope.logoPath = 'images/heat-logo.png';
	}

	$scope.submitGame = function() {
		teamService.addNewGame($scope.newGame).then(function() {
			teamService.getTeamData($scope.newGame.homeTeam).then(function(data) {
				$scope.teamData = data;
				$scope.newGame = {};
				$scope.ShowNewGameForm = false;
			})
		})
	}

});