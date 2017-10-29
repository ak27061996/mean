var adminApp = angular.module('fwrk.admin', [
	'ui.router',
	'btford.markdown',
	'angular-page-loader',
	'fwrk.products',
	'fwrk.users',
	'fwrk.categories',
	'fwrk.orders',
	'fwrk.pages'

]);

adminApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('dashboard', {
		url: '/',
		templateUrl: '/admin/templates/admin_index.html',
		controller: 'dashboardCtrl'
	}) 
		

		.state('userList', {
			url: '/userList',
			templateUrl: '/admin/templates/userList.html',
			resolve: {
				userList: function(Users){
					return Users.all().then(function(data){
						return data;
					});
				}
			},
			controller: 'AllUsersCtrl'
		})

		.state('addUser', {
			url: '/addUser',
			templateUrl: '/admin/templates/addUser.html',
			controller: 'addUserCtrl'   
		})
		.state('editUser', {
			url: '/editUser/:paraml',
			templateUrl: '/admin/templates/editUser.html',
			controller: 'editUserCtrl'
		})

		
		.state('addCategory', {
			url: '/addCategory',
			templateUrl: '/admin/templates/addCategory.html',
			controller: 'addCategoryCtrl'   
		})
		
		.state('CategoryList', {
			url: '/CategoryList',
			templateUrl: '/admin/templates/allCategories.html',
			resolve: {
				categoryList: function(Category){
					return Category.all().then(function(data){
						return data;
					});
				}
			},
			controller: 'CategoryListCtrl'
		})


		/**/
		.state('addProduct', {
			url: '/addProduct',
			templateUrl: '/admin/templates/addProduct.html',
			controller: 'addProductCtrl'   
		})
		
		.state('ProductList', {
			url: '/ProductList',
			templateUrl: '/admin/templates/allProducts.html',
			resolve: {
				productList: function(Product){
					return Product.all().then(function(data){
						return data;
					});
				}
			},
			controller: 'ProductListCtrl'
		})
		

		.state('editProduct', {
			url: '/editProduct/:paraml',
			templateUrl: '/admin/templates/editProduct.html',
			controller: 'editProductCtrl'
		})
		
		
		.state('editCategory', {
			url: '/editCategory/:paraml',
			templateUrl: '/admin/templates/editCategory.html',
			controller: 'editCategoryCtrl'
		})   
 
            

              .state('editOrder', {
			url: '/editOrder/:paraml',
			templateUrl: '/admin/templates/editOrder.html',
			controller: 'editOrderCtrl'
		})
     
              .state('OrderList', {
			url: '/OrderList',
			templateUrl: '/admin/templates/allOrders.html',
			resolve: {
				orderList: function(Order){
					return Order.all().then(function(data){
						return data;
					});
				}
			},
			controller: 'OrderListCtrl'
		})




      // page 

      		.state('addPage', {
			url: '/addPage',
			templateUrl: '/admin/templates/addPage.html',
			controller: 'addPageCtrl'   
		})
		
		.state('PageList', {
			url: '/PageList',
			templateUrl: '/admin/templates/allPages.html',
			resolve: {
				pageList: function(Page){
					return Page.all().then(function(data){
						return data;
					});
				}
			},
			controller: 'PageListCtrl'
		})
		

		.state('editPage', {
			url: '/editPage/:paraml',
			templateUrl: '/admin/templates/editPage.html',
			controller: 'editPageCtrl'
		})

		
});
