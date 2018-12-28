vx.module('ibsapp').controller('AbnTestController', function($scope, $timeout) {
	var apple_selected, tree;
	$scope.my_tree_handler = function(branch) {
		var _ref;
		$scope.output = branch;
	};
	$scope.my_data = JSON.parse(localStorage.getItem("local_time_customhouse")) || Guide;
	console.log(JSON.stringify($scope.my_data));
	$scope.my_tree = tree = {};
	//添加节点
	$scope.try_adding_a_branch = function() {
		
		if($scope.output.level%2==0&&$scope.output.children&&$scope.output.children.length>0){
			alert("该节点无法添加问题，请重新选择！");
			return;
		}
		
		var b;
		b = tree.get_selected_branch();
		return tree.add_branch(b, {
			label: 'New Branch',
			data: {
				//				something: 42,
				//				"else": 43
				require: '',
				Result: '',
				Explain: ''
			}
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
	};
	//生成JSON
	$scope.create_a_json = function() {
		localStorage.setItem("local_time_customhouse", JSON.stringify($scope.my_data))
		alert("本机存储成功！！！如想修改服务器数据,请“复制数据”并提交给作者.")
	};
	$scope.delete_json = function() {
		localStorage.removeItem("local_time_customhouse");
		alert('还原成功');
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
		alert('复制成功');
	};
});