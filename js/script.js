var myApp = angular.module('myApp', [])
	.controller('madlibs', function ($scope) {
		$scope.words = {
			gender: 'female',
			female_name: 'jenna', 
			dirty_task: 'cleaning pig farms',
			obnoxious_celebrity: 'paris hilton',
			job_title: 'chocolate maker',
			celebrity: 'tom hanks',
			huge_number: '1 billion',
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

		$scope.setPronoun();
	});