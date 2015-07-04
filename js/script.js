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
			adjective: 'jumping',
			first_person_pronoun: function () {
				var pronoun = this.gender == 'female' ? 'she' : 'he';
				
				return pronoun;
			},
			second_person_pronoun: function () {
				var pronoun = this.gender == 'female' ? 'her' : 'his';
				
				return pronoun;
			},
			third_person_pronoun: function () {
				var pronoun = this.gender == 'female' ? 'her' : 'him';
				
				return pronoun;
			}
		};
	});