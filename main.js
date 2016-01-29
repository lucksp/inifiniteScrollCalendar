angular.module('infiniteAgenda', [])

angular.module('infiniteAgenda')
	.factory('factoryCalendar', [function() {

		var baseDate = new Date();
		var dateAdder = function(){
			return {
				date 		: baseDate.setDate(baseDate.getDate() + 1),
				time 		: undefined,
				title		: 'a brief description',
				description	: 'enter more information'	
			}		
		};

		var trueFalseSetter = [{
				hideTextBox : false,
				hideTimeBox : false,
				hideTitleBox : false
		}]

		var entries = [
			{
				date 		: baseDate.setDate(baseDate.getDate()),
				time 		: undefined,
				title		: 'a brief description',
				description	: 'enter more information',
			},
		];

		return {
			calendarArray 	: entries,
			dateAdder		: dateAdder,
			hideSets 		: trueFalseSetter
		}

	}]);

angular.module('infiniteAgenda')
	.controller('controllerCalendar', ['$scope', 'factoryCalendar', '$interval', function($scope, factoryCalendar, $interval) {

		$scope.calendarArray = factoryCalendar.calendarArray;
		$scope.trueFalseArray = factoryCalendar.hideSets
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

	for (var i = 0; i < 21; i++) {
		$scope.calendarArray.push(factoryCalendar.dateAdder())
	}

	$interval (function () {

		var scrollTop = document.scrollingElement.scrollTop
		var scrollHeight = document.scrollingElement.scrollHeight
		var scrollRatio = scrollTop/scrollHeight

			if ( scrollRatio > .7 ) {
				$scope.calendarArray.push(factoryCalendar.dateAdder())
			}
			console.log(scrollRatio)

	}, 100);

	}]);