vx.module('ibsapp').controller('AbnTestController', ['$scope',function($scope) {
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
	$scope.my_data = JSON.parse(localStorage.getItem("local_time_customhouse2")) || Guide;
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
		localStorage.setItem("local_time_customhouse2", JSON.stringify($scope.my_data))
		alert("本机存储成功！您可以通过访问链接，查看效果。")
	};
	$scope.delete_json = function() {
		localStorage.removeItem("local_time_customhouse2");
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
}]);