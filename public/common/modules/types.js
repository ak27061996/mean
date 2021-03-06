var typesModule = angular.module('fwrk.types', []);

typesModule.service('Type', function($http) {
    return {
        all: function() {
            return $http.get('/api/types').then(function(postList) {
                return postList.data;
            });
        },
        add: function(newPost) {
            return $http({
                method: 'post',
                url: '/api/types',
                data: newPost
            }).then(function(res) {
               //console.log("data pass through");
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!!!3');
                console.error(err);
                return err;
            });
        },
        remove: function(newPost) {
            return $http({
                method: 'post',
                url: '/api/deletetype',
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
                url: '/api/get_t',
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
            console.log(parmal);
            console.log('simer');
            return $http({
                method: 'post',
                url: '/api/parmalt',//posts/:id
                data: parmal
            }).then(function(res) {
            	console.log('22222simer');
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





