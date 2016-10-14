var aleDsz = angular.module("aleDszStore", ['ui.router']);

aleDsz.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider

	.state('home',
	{
		url: '/home',
		views:
		{
			'':
			{
				templateUrl: 'layouts/home.html',
				controller: 'MainController'
			}
		}
	})

	.state('addProduto',
	{
		url: '/produto/new',
		views:
		{
			'':
			{
				templateUrl: 'layouts/addProduto.html',
				controller: 'MainController'
			}
		}
	})

	.state('listProduto',
	{
		url: '/produto/all',
		views:
		{
			'':
			{
				templateUrl: 'layouts/listProduto.html',
				controller: 'MainController'
			}
		}
	})
});