vx.module('ibsapp', ['ui.router', 'angularBootstrapNavTree'])
	.directive("ngTouchend", function () {
    return {
        controller: ["$scope", "$element", function ($scope, $element) {
 
            $element.bind("touchend", onTouchEnd);
            function onTouchEnd(event) {
                var method = $element.attr("v-touchend");
                $scope.$apply(method);
            }
 
        }]
    }})
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
	.run(['$rootScope',function($rootScope){
		$rootScope.fullName="全屏";
		$rootScope.toggleFullScreen=function(){
			if($rootScope.fullName=='全屏'){
				if(document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			  } else if(document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			  } else if(document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen();
			  } else if(document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen();
			  }
			  $rootScope.fullName='退屏';
			}else{
				if(document.exitFullscreen) {
					document.exitFullscreen();
				  } else if(document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				  } else if(document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				  }
				  $rootScope.fullName='全屏';
			}			
		};
	}])
	.controller("indexCtrl", ['$scope','$sce', function($scope,$sce) {
		$scope.dataJson = Guide[0];
		$scope.doIt = function(item) {
			if(item.children && item.children.length == 1) {
				$scope.dataJson = $scope.addSmallClass(item.children[0]);
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
			$scope.dataJson = $scope.addSmallClass(Guide[0]);
		};
		$scope.trustAsHtml=function(htm){
			return $sce.trustAsHtml(htm);
		};
		$scope.addSmallClass=function(data){
			var i=0,childData=data.children,childLen=childData.length,labelLen=0;
			for(i;i<childLen;i++){
				var tempLen=childData[i].label.length;
				if(tempLen>labelLen){
					labelLen=tempLen;
				}				
			}
			if(childLen==2){
				if(labelLen>20){
					data.smallClass=true;
				}
			}else if(childLen==3){
				if(labelLen>15){
					data.smallClass=true;
				}
			}
			return data;
		}

	}]);