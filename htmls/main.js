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
    }
  }).directive("ngPress", function () {
    return {
      controller: ["$scope", "$element", "$state","$timeout", function ($scope, $element, $state,$timeout) {

        $element.bind("touchstart", onTouchStart);
        $element.bind("touchend", onTouchEnd);
        var timeoutToset;

        function onTouchStart(event) {
          timeoutToset = $timeout(function () {
            $state.go("/set");
          }, 5000);
        }

        function onTouchEnd(event) {
          $timeout.cancel(timeoutToset);
        }

      }]
    }
  })
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('/main', {
        url: '/main',
        templateUrl: 'htmls/main.html'
      })
      .state('/set', {
        url: '/set',
        templateUrl: 'htmls/setting.html'
      });
    $urlRouterProvider.otherwise(function ($injector) {
      var $state = $injector.get("$state");
      $state.go("/main");
    });
  }])
  .run(['$rootScope', function ($rootScope) {
    $rootScope.fullName = "全屏";
    $rootScope.toggleFullScreen = function () {
      if ($rootScope.fullName == '全屏') {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
        $rootScope.fullName = '退屏';
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
        $rootScope.fullName = '全屏';
      }
    };
  }])
  .controller("indexCtrl", ['$scope', '$sce','$timeout', function ($scope, $sce,$timeout) {
    $scope.startup = function () {
      $scope.dataJson = Guide[0];
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isAndroid || isiOS) {
        $scope.isMobile = true;
      } else {
        $scope.isMobile = false;
      }
    }
    $scope.doIt = function (ev,item) {
      if ($scope.isMobile) {
        if (ev=="mouseup") {
          return;
        }
      } else {
        if (ev!="mouseup") {
          return;
        }
      }

      if (item.children && item.children.length == 1) {
        $scope.dataJson = $scope.addSmallClass(item.children[0]);
        if($scope.dataJson.leaf){//延迟10s退出
          $scope.timeoutExit = $timeout(function () {
            $scope.dataJson = Guide[0];
          }, 10000);
        }
      } else {
        alert("抱歉，没有找到合适的结果！请检查数据设置。");
      }
    };
    $scope.exit = function (ev) {
      if ($scope.isMobile) {
        if (ev=="mouseup") {
          return;
        }
      } else {
        if (ev!="mouseup") {
          return;
        }
      }
      if($scope.timeoutExit){
        $timeout.cancel($scope.timeoutExit);
      }
      $scope.dataJson = $scope.addSmallClass(Guide[0]);
    };
    $scope.trustAsHtml = function (htm) {
      return $sce.trustAsHtml(htm);
    };
    $scope.addSmallClass = function (data) {
      var i = 0,
        childData = data.children,
        childLen = childData.length,
        labelLen = 0;
      for (i; i < childLen; i++) {
        var tempLen = childData[i].label.length;
        if (tempLen > labelLen) {
          labelLen = tempLen;
        }
      }
      if (childLen == 2) {
        if (labelLen > 20) {
          data.smallClass = true;
        }
      } else if (childLen == 3) {
        if (labelLen > 15) {
          data.smallClass = true;
        }
      }
      return data;
    }

  }]).controller('AbnTestController', ['$scope',function($scope) {
	var apple_selected, tree;
	$scope.my_tree_handler = function(branch) {
		if(branch){
			$scope.output = branch;
		}
		if($scope.output.leaf){
			$scope.outputName="结果";
		}else {
			if($scope.output.level%2==0){
				$scope.outputName="选项";
			}else{
				$scope.outputName='问题';
			}
		}
	};
	$scope.my_data = JSON.parse(localStorage.getItem("local_time_customhouse4")) || Guide;
	//console.log(JSON.stringify($scope.my_data));
	$scope.my_tree = tree = {};
	$scope.doChange=function(){
		
		var b = $scope.my_tree.get_selected_branch(),
			siblings = tree.get_siblings(b);
		if($scope.output.leaf) {
			if( (siblings&&siblings.length > 1) || $scope.output.children.length > 0) {
				$scope.output.leaf = false;
				alert("请删除所有“同级节点”和“孩子节点”后，再将该节点设为结果节点!");
			}else if($scope.output.level % 2 == 0){
				$scope.output.leaf = false;
			}
		} else if(!$scope.output.children || $scope.output.children.length == 0) {
			var r = confirm("该节点为最后一个节点，确定要取消结果节点吗？")
			if(r == true) {
				//document.write("You pressed OK!");
			} else {
				$scope.output.leaf = true;
			}
		}
		
		$scope.my_tree_handler();
	};

	//添加节点
	$scope.try_adding_a_branch = function() {
		if($scope.output.leaf) {
			alert("该节点为“结果节点”，无法添加！");
			return;
		} else if($scope.output.level % 2 == 0 && $scope.output.children.length>0) {
			alert("该“选项节点”已有一个“孩子节点”，无法添加！");
			return;
		}

		var b;
		b = tree.get_selected_branch();
		alert("New Branch 新增成功！");
		
		return tree.add_branch(b, {
			label: 'New Branch',
			data: 'New Branch Explain'
		});		
	};
	//删除节点
	$scope.try_deleting_a_branch = function() {
		var b;
		b = tree.get_selected_branch();
		var parent;
		parent = tree.get_parent_branch(b);
		tree.delete_branch(parent, b);
		$scope.output = '';
		//刷新
		$scope.my_tree_handler();
		alert("删除成功！");
	};
	//生成JSON
	$scope.create_a_json = function() {
		localStorage.setItem("local_time_customhouse4", JSON.stringify($scope.my_data))
		alert("本机存储成功！您可以通过访问链接，查看效果。")
	};
	$scope.delete_json = function() {
		localStorage.removeItem("local_time_customhouse4");
		alert('还原成功！');
	};
	$scope.copy_json = function() {
		var Url2 = JSON.stringify($scope.my_data);
		var oInput = document.createElement('input');
		oInput.value = Url2;
		document.body.appendChild(oInput);
		oInput.select(); // 选择对象
		document.execCommand("Copy"); // 执行浏览器复制命令
		oInput.className = 'oInput';
		oInput.style.display = 'none';
		alert('复制成功！');
  };
  $scope.view_json = function(){
    if($scope.viewjson){
      $scope.viewjson=null;
    }else{
      $scope.viewjson = JSON.stringify($scope.my_data);
    }      
  };
}]);;
