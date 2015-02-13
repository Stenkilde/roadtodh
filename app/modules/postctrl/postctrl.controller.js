(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name roadtodhApp.controller:PostctrlCtrl
	 * @description
	 * # PostctrlCtrl
	 * Controller of the roadtodhApp
	 */
	angular
		.module('roadtodhApp')
		.controller('Postctrl', Postctrl);

	/* @ngInject */
	function Postctrl(Posts, $scope) {
		/*jshint validthis: true */
		var vm = this;

		activate();

		function activate() {

		};

		$scope.posts = Post.all;
		$scope.post = {name: ''};

		$scope.submitPost = function () {
			Post.create($scope.post).then(function () {
				$scope.post = {name: ''};
			});
		};

		$scope.deletePost = function (post) {
			Post.delete(post);
		};



	};

})();
