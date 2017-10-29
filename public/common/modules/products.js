var productsModule = angular.module('fwrk.products', []);
//var categoriesModule = angular.module('fwrk.categories', []);


productsModule.service('Product', function($http) {
    return {
        all: function() {
            return $http.get('/api/products').then(function(postList) {
                return postList.data;
            });
        },



       onFileSelect : function(image, id, action) {

            if (angular.isArray(image)) {
                console.log(image[0]);
                image = image[0];
            }

            var fd = new FormData();
            //Take the first selected file
            fd.append("file", image);
            fd.append("_id", id);
            fd.append("action", action);
            fd.append("upload_dir", 'public/admin/uploads/products/');

            // This is how I handle file types in client side
            if (image.type !== 'image/png' && image.type !== 'image/jpeg') {
                 alert('Only PNG and JPEG are accepted.');
                return false;
            }


            // return $http.upload({
            return $http({
                method: 'post',
                url: '/api/upload_product_image',
                data: fd,
                withCredentials: true,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            }).then(function(res) {
                // return the new post
                console.log("uploaded file name : ");
                console.log(res);
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the product1111!');
                console.error(err);
                return err;
            });
        },



get_cat: function() {
        console.log( "in the product get_category");

        return $http.get('/api/get_cat').then(function(categories) {
                 console.log(categories);
//                 return false;
                return categories.data;
            }).catch(function(err) {
                console.error('Something went wrong getting categories!');
                console.error(err);
                return err;
            });;
        },



        add: function(newPost) {
            return $http({
                method: 'post',
                url: '/api/products',
                data: newPost
            }).then(function(res) {
                // return the new post
console.log("adding product..");
console.log(res);
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
                url: '/api/deleteproduct',
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
                url: '/api/get_prod',
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
                url: '/api/parmalprod',
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







