var myApp = angular.module('myApp', [])
	.controller('madlibs', function ($scope) {
		$scope.words = {
			gender: 'female',
			female_name: 'carne asada', 
			dirty_task: 'cleaning pig farms',
			obnoxious_celebrity: 'paris hilton',
			job_title: 'chocolate maker',
			celebrity: 'tom hanks',
			huge_number: 1000000,
			tedious_task: 'doing laundry',
			useless_skill: 'code in java',
			adjective: 'jumping'
		};

		$scope.setPronoun = function () {
			var gender = $scope.words.gender;
			$scope.first_person_pronoun = gender == 'female' ? 'she' : 'he';
			$scope.second_person_pronoun = gender == 'female' ? 'her' : 'his';
			$scope.third_person_pronoun = gender == 'female' ? 'her' : 'him';
		};

		$scope.submit = function () {
			console.log("form submitted");
			$scope.setPronoun();
		};

		$scope.reset = function () {
			console.log('form reset');
			$scope.myForm.$submitted = false;
			$scope.words = {};
		};
	});