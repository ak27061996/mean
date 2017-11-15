
var usersModule = angular.module('fwrk.users', []);

usersModule.service('Users', function($http) {

    return {
        all: function() {
            return $http.get('/api/users').then(function(userList) {
                return userList.data;
            });
        },
        add: function(newUser) {
            return $http({
                method: 'post',
                url: '/api/users',
                data: newUser
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        },

   chatu:function(msg){
            console.log("asasdasd");
            console.log(msg);
            return $http({
                method: 'post',
                url: '/api/chats',
                data: msg
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        },



       onFileSelect : function(image, ids, action) {
            var fd = new FormData();
            //Take the first selected file
            fd.append("file", image);
            fd.append("curr_id", ids.curr_id);
            fd.append("name", ids.name);
            fd.append("_id", ids.id);
            fd.append("action", action);
            fd.append("upload_dir", 'public/admin/uploads/chats/');

            // This is how I handle file types in client side
            if (image.type !== 'image/png' && image.type !== 'image/jpeg') {
                 alert('Only PNG and JPEG are accepted.');
                return false;
            }


            // return $http.upload({
            return $http({
                method: 'post',
                url: '/api/upload_image',
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
                console.error('Something went wrong adding image!');
                console.error(err);
                return err;
            });
        },



        sentEmail:function(email) {
            console.log(email);
            return $http({
                method: 'post',
                url: '/api/emails',
                data: email
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong on the post email!');
                console.error(err);
                return err;
            });
        },

           homeadd: function(newUser) {
            return $http({
                method: 'post',
                url: '/api/users/home',
                data: newUser
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        },
         login: function(newUser) {
            return $http({
                method: 'post',
                url: '/api/users/login',
                data: newUser
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        },
        remove: function(usr) {
            //console.log("here")
            return $http({
                method: 'post',
                url: '/api/deleteuser',
                data: usr
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });

        },
        update: function(usr) {

            return $http({
                method: 'post',
                url: '/api/editusrID',
                data: usr
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });

        },
        sigledata: function(id) {
            return $http({
                method: 'post',
                url: '/api/edituser',
                data: id
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