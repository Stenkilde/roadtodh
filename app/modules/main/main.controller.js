(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name roadtodhApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the roadtodhApp
	 */
	angular
		.module('roadtodhApp')
		.controller('Main', Main);

	/* @ngInject */
	function Main($scope, Post) {
		/*jshint validthis: true */
		var vm = this;


		$scope.posts = Post.all;

		$scope.post = {username: ''};

		$scope.submitPost = function () {
			Post.create($scope.post).then(function () {
				$scope.post = {username: ''};
			});
		};

		$scope.deletePost = function (post) {
			Post.delete(post);
		};


		activate();

		function activate() {

		};
	};

})();
