;(function(ng){
	ng
	.module('hrisTemplating', [])
	.controller('mainController', [
		'$scope',
		function($scope){
			$scope.main = {
				data : [
					{
						name : 'Test1',
						email : 'test1gmail.com',
						phone : '98989898'
					},{
						name : 'Test2',
						email : 'test2gmail.com',
						phone : '98989898'
					},{
						name : 'Test3',
						email : 'test3gmail.com',
						phone : '98989898'
					},{
						name : 'Test4',
						email : 'test4gmail.com',
						phone : '98989898'
					}
				],
				startIndex : 0
			};
			
			// console.log('Main Controller', $scope.main);
		}
	])
	.directive('timeSheetPanel', [
		function(){
			return {
				restrict : 'E',
				templateUrl : 'time-sheet-panel.html',
				scope : true,
				controller : [
					'$scope',
					function($scope){
						var result;
						$scope.mDown = function(attr1, attrs){
							result = [];
							result.push(attrs);
							console.log(attr1, attrs);
						};
						
						$scope.mUp = function(attr1, attrs){
							result.push(attrs)
							console.log(attr1, attrs, result);
						};
					}
				]
			};
		}
	])
	.directive('cellData', [
		function(){
			return {
				restrict : 'E',
				templateUrl : 'cell-data.html',
				scope : {
					it : '=',
					current : '=',
					mDown : '&',
					mUp : '&'
				},
				link : function(scope, element, attrs){
					element.on('mousedown', function(event){
						console.log(event);
						scope.mDown();
					});
					
					element.on('mouseup', function(event){
						console.log(event);
						scope.mUp();
					});
				}
			}
		}
	]);
})(window.angular);