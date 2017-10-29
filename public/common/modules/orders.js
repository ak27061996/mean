var ordersModule = angular.module('fwrk.orders', []);
//var categoriesModule = angular.module('fwrk.categories', []);

ordersModule.service('Order', function($http) {
    return {
        all: function() {
            return $http.get('/api/orders').then(function(postList) {
                return postList.data;
            });
        },
        add: function(newPost) {
            return $http({
                method: 'post',
                url: '/api/orders',
                data: newPost
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        },
        remove: function(newPost) {
            return $http({
                method: 'post',
                url: '/api/deleteorder',
                data: newPost
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        },
        update: function(newPost) {
            return $http({
                method: 'post',
                url: '/api/get_ord',
                data: newPost
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });

        },
        sigledata: function(parmal) {
            console.log(parmal)
            console.log('simer')
            return $http({
                method: 'post',
                url: '/api/parmalord',
                data: parmal
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        }
    };
});
