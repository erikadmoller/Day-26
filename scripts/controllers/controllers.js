angular.module('basic.controllers', []) 
.controller('loadingCtrl', function($scope, $timeout) {

	// var attempt = 3; // Variable to count number of attempts.
	// Below function Executes on click of login button.
	$scope.validate = function(){
	$scope.username = username.val();
	$scope.password = password.val();
	
	if ( username == "aaron@theironyard.com" && password == "password123"){
		alert("Login successfully");
		window.location = "http://www.theironyard.com"; // Redirecting to other page.
		return false;
	}
	// else{
	// 	attempt --;// Decrementing by one.
	// 	alert("You have left "+attempt+" attempt;");
	// 	// Disabling fields after 3 attempts.
	// if( attempt == 0){
	// 	document.getElementById("username").disabled = true;
	// 	document.getElementById("password").disabled = true;
	// 	document.getElementById("submit").disabled = true;
	// 	return false;
	// }
	// }
	}

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

