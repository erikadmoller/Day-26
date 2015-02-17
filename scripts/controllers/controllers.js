angular.module('basic.controllers', []) 
.controller('loadingCtrl', function($scope, $timeout) {


	$scope.numLikes = 0
	
	$scope.likeClick = function() {

		$scope.numLikes++
			
	}


	$scope.displayLoading = 'Loading...';
	$scope.disable = false;

	$scope.buttonText = 'submit';


	$scope.click = function() {
		
		$scope.buttonText = $scope.displayLoading;
		// $scope.displayLoading;
		$scope.disable = true;

	$timeout(function() {
		$scope.buttonText = 'submit';
		$scope.disable = false;
	}, 2000);

	}

	$scope.red = true;
	$scope.blue = true;
	$scope.green = true;

	$scope.showContentRed = function() {
		$scope.red = false;
		$scope.blue = true;
		$scope.green = true
	}
	$scope.showContentBlue = function() {
		$scope.red = true;
		$scope.blue = false;
		$scope.green = true
	}
	$scope.showContentGreen = function() {
		$scope.red = true;
		$scope.blue = true;
		$scope.green = false
	}
	
});

