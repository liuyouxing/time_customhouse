vx.module('ibsapp').controller('AbnTestController', function($scope, $timeout) {
	var apple_selected, tree, treedata_avm, treedata_geography;
	$scope.my_tree_handler = function(branch) {
		var _ref;
		$scope.output = branch;
	};
//	apple_selected = function(branch) {
//		return $scope.output = branch;
//	};
	treedata_avm = [{
		label: 'Animal',
		children: [{
			label: 'Dog',
			data: {
				//description: "man's best friend",
				require: 'C5',
				Result: 'R9',
				Explain: 'R9E'
			}
		}, {
			label: 'Cat',
			data: {
				//description: "Felis catus"
			}
		}, {
			label: 'Hippopotamus',
			data: {
				//description: "hungry, hungry"
			}
		}, {
			label: 'Chicken',
			children: [{
			label: 'Dog',
			data: {
				//description: "man's best friend",
				require: 'C5',
				Result: 'R9',
				Explain: 'R9E'
			}
		}]
			//children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
		}]
	}, {
		label: 'Vegetable',
		data: {
			definition: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
			data_can_contain_anything: true
		},
		onSelect: function(branch) {
			return $scope.output = branch;
		},
		children: [{
			label: 'Oranges'
		}, {
			label: 'Apples',
			children: [{
				label: 'Granny Smith'
//				onSelect: apple_selected
			}, {
				label: 'Red Delicous'
//				onSelect: apple_selected
			}, {
				label: 'Fuji'
//				onSelect: apple_selected
			}]
		}]
	}, {
		label: 'Mineral',
		children: [{
			label: 'Rock',
			children: ['Igneous', 'Sedimentary', 'Metamorphic']
		}, {
			label: 'Metal',
			children: ['Aluminum', 'Steel', 'Copper']
		}, {
			label: 'Plastic',
			children: [{
				label: 'Thermoplastic',
				children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
			}, {
				label: 'Thermosetting Polymer',
				children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
			}]
		}]
	}];
//	treedata_geography = [{
//		label: 'North America',
//		children: [{
//			label: 'Canada',
//			children: ['Toronto', 'Vancouver']
//		}, {
//			label: 'USA',
//			children: ['New York', 'Los Angeles']
//		}, {
//			label: 'Mexico',
//			children: ['Mexico City', 'Guadalajara']
//		}]
//	}, {
//		label: 'South America',
//		children: [{
//			label: 'Venezuela',
//			children: ['Caracas', 'Maracaibo']
//		}, {
//			label: 'Brazil',
//			children: ['Sao Paulo', 'Rio de Janeiro']
//		}, {
//			label: 'Argentina',
//			children: ['Buenos Aires', 'Cordoba']
//		}]
//	}];
	$scope.my_data = JSON.parse(localStorage.getItem("local_time_customhouse"))||Guide//treedata_avm;
	console.log(JSON.stringify($scope.my_data));
//	$scope.try_changing_the_tree_data = function() {
//		if($scope.my_data === treedata_avm) {
//			return $scope.my_data = treedata_geography;
//		} else {
//			return $scope.my_data = treedata_avm;
//		}
//	};
	$scope.my_tree = tree = {};
//	$scope.try_async_load = function() {
//		$scope.my_data = [];
//		$scope.doing_async = true;
//		return $timeout(function() {
//			if(Math.random() < 0.5) {
//				$scope.my_data = treedata_avm;
//			} else {
//				$scope.my_data = treedata_geography;
//			}
//			$scope.doing_async = false;
//			return tree.expand_all();
//		}, 1000);
//	};
	//添加节点
	$scope.try_adding_a_branch = function() {
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
		tree.delete_branch(parent,b);
		$scope.output = '';
	};
	//生成JSON
	$scope.create_a_json = function(){
		localStorage.setItem("local_time_customhouse",JSON.stringify($scope.my_data))
		alert("本机存储成功!如想修改服务器数据,请“复制数据”并提交给作者.")
	};
	$scope.delete_json = function(){
		localStorage.removeItem("local_time_customhouse");
		alert('还原成功');
	};
		$scope.copy_json = function(){
		
        var Url2=JSON.stringify($scope.my_data);
        var oInput = document.createElement('input');
        oInput.value = Url2;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display='none';
        alert('复制成功');



		};
});