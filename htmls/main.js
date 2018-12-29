vx.module('ibsapp', ['ui.router', 'angularBootstrapNavTree'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('/main', {
				url: '/main',
				templateUrl: 'htmls/main.html'
			})
			.state('/set', {
				url: '/set',
				templateUrl: 'htmls/setting.html'
			});
		$urlRouterProvider.otherwise(function($injector) {
			var $state = $injector.get("$state");
			$state.go("/main");
		});
	}])
	.controller("indexCtrl", ['$scope', function($scope) {
		//var Answers = [];
		$scope.$root.dataJson = Guide[0];
		$scope.doIt = function(item) {
			//Answers.push(item.label);
			if(item.children && item.children.length == 1) {
				$scope.dataJson = item.children[0];
			} else {
				alert("抱歉，没有找到合适的结果！请检查数据设置。");
			}
			//			else {
			//				for(var i = 0; i < item.data.length; i++) {
			//					var resultObj = item.data[i];
			//					for(var j = 0; j < Answers.length; j++) {
			//						if(Answers[j] == resultObj.require) {
			//							$scope.dataJson = resultObj;
			//							return;
			//						}
			//					}
			//
			//				}
			//			}

		};
		$scope.exit = function() {
			location.reload();
		};

	}]);