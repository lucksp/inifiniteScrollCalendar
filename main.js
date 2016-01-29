angular.module('infiniteAgenda', [])

angular.module('infiniteAgenda')
	.factory('factoryCalendar', [function() {

		var entries = [
			{
				date 		: undefined,
				time 		: undefined,
				title		: 'a brief description',
				description	: 'enter more information',
				hideTextBox : false,
				hideTimeBox : false,
				hideTitleBox : false
			},
			{
				date 		: undefined,
				time 		: undefined,
				title		: 'a brief description',
				description	: 'enter more information',
				hideTextBox : false,
				hideTimeBox : false,
				hideTitleBox : false
			},
			{
				date 		: undefined,
				time 		: undefined,
				title		: 'a brief description',
				description	: 'enter more information',
				hideTextBox : false,
				hideTimeBox : false,
				hideTitleBox : false
			},
			{
				date 		: undefined,
				time 		: undefined,
				title		: 'a brief description',
				description	: 'enter more information',
				hideTextBox : false,
				hideTimeBox : false,
				hideTitleBox : false
			},
			{
				date 		: undefined,
				time 		: undefined,
				title		: 'a brief description',
				description	: 'enter more information',
				hideTextBox : false,
				hideTimeBox : false,
				hideTitleBox : false
			},
			{
				date 		: undefined,
				time 		: undefined,
				title		: 'a brief description',
				description	: 'enter more information',
				hideTextBox : false,
				hideTimeBox : false,
				hideTitleBox : false
			}
		];

		return {
			calendarArray : entries
		}

	}]);

angular.module('infiniteAgenda')
	.controller('controllerCalendar', ['$scope', 'factoryCalendar', function($scope, factoryCalendar) {

		$scope.calendarArray = factoryCalendar.calendarArray;
		console.log($scope.calendarArray);

		$scope.showHideTime = function(allCalendarObjs) {
				allCalendarObjs.hideTimeBox = !allCalendarObjs.hideTimeBox;
			}
		$scope.showHideTitle = function(allCalendarObjs) {
				allCalendarObjs.hideTitleBox = !allCalendarObjs.hideTitleBox;
			}
		$scope.showHideText = function(allCalendarObjs) {
				allCalendarObjs.hideTextBox = !allCalendarObjs.hideTextBox;
			}

	}]);