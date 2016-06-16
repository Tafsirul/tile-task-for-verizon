var App = angular.module('myApp',[]);

App.controller('myCtrl',function($scope,$http,$sce){
	$scope.tiles = [];
	$scope.url3 = $sce.trustAsResourceUrl('tafsirline.html');
	$scope.url2 = $sce.trustAsResourceUrl('tafsirpie.html');
	$scope.url1 = $sce.trustAsResourceUrl('tafsirbar.html');
	$http.get('data.json')
	 .success(function(resp){
		$scope.tiles = resp.user;
		console.log($scope.tiles);
	});


$scope.t1 = function(){
	$scope.url1 = $sce.trustAsResourceUrl('t1.html');
	$scope.url2 = $sce.trustAsResourceUrl('t1_2.html');
	$scope.url3 = $sce.trustAsResourceUrl('t1_3.html');
}

$scope.t2 = function(){
	$scope.url1 = $sce.trustAsResourceUrl('t2.html');
	$scope.url2 = $sce.trustAsResourceUrl('t2_2.html');
	$scope.url3 = $sce.trustAsResourceUrl('t2_3.html');
}

$scope.t3 = function(){
	$scope.url1 = $sce.trustAsResourceUrl('t3.html');
	$scope.url2 = $sce.trustAsResourceUrl('t3_2.html');
	$scope.url3 = $sce.trustAsResourceUrl('t3_3.html');
}

$scope.t4 = function(){
	$scope.url1 = $sce.trustAsResourceUrl('t4.html');
	$scope.url2 = $sce.trustAsResourceUrl('t2_2.html');
	$scope.url3 = $sce.trustAsResourceUrl('t4_3.html');
}

$scope.t5 = function(){
	$scope.url1 = $sce.trustAsResourceUrl('https://docs.angularjs.org/tutorial');
	$scope.url2 = $sce.trustAsResourceUrl('https://www.angularjs.org');
	$scope.url3 = $sce.trustAsResourceUrl('https://docs.angularjs.org/tutorial');
}

$scope.t6 = function(){
	$scope.url1 = $sce.trustAsResourceUrl('t3.html');
	$scope.url2 = $sce.trustAsResourceUrl('t2_2.html');
	$scope.url3 = $sce.trustAsResourceUrl('t1_3.html');
}

$scope.t7 = function(){
	$scope.url1 = $sce.trustAsResourceUrl('t1.html');
	$scope.url2 = $sce.trustAsResourceUrl('https://www.angularjs.org');
	$scope.url3 = $sce.trustAsResourceUrl('https://docs.angularjs.org/tutorial');
}

// $scope.textra = function(){
// 	$scope.url1 = $sce.trustAsResourceUrl('t4.html');
// 	$scope.url2 = $sce.trustAsResourceUrl('t2_2.html');
// 	$scope.url3 = $sce.trustAsResourceUrl('t4_3.html');
// }

});



App.directive('tileTemp',function(){
	return{
		restrict:'E',
		templateUrl:'tileTemp.html'
	}
});

App.directive('tileTemp2',function(){
	return{
		restrict:'E',
		templateUrl:'tileTemp2.html'
	}
});
