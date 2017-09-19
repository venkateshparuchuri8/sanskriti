var sankritiApp = angular.module('sankritiApp', ['ngRoute','ngSanitize']);

sankritiApp.controller('serviceController', ['$scope', '$http', function ($scope, $http) {

		$scope.getIntialData = function() {
			$http({
					method: 'GET',
					url: 'http://thrymrcms.com:8022/api/sankriti_computer/home',
					params: {
							'load_children': false
					}
			}).then(function (response) {
				console.log(response);
				$scope.scalars = response.data.scalars;
				$scope.our_services = response.data.our_services;
			});
		}

	}]);
	sankritiApp.filter('trusted', function($sce){
	        return function(html){
	            return $sce.trustAsHtml(html)
	        }
	     });
