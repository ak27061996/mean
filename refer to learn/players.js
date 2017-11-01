
var playersModule = angular.module('fwrk.players', []);

playersModule.service('Players', function($http) {
// console.log($http);

    return {
        all: function() {
            return $http.get('/api/players').then(function(playerList1) {
                return playerList1.data;
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
            fd.append("upload_dir", 'public/admin/uploads/players/');

            // This is how I handle file types in client side
            if (image.type !== 'image/png' && image.type !== 'image/jpeg') {
                // alert('Only PNG and JPEG are accepted.');
                return false;
            }


            // return $http.upload({
            return $http({
                method: 'post',
                url: '/api/upload_player_image',
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
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        },        
        add: function(newPlayer) {
            console.log("newPlayer:");
            console.log(newPlayer);
            return $http({
                method: 'post',
                url: '/api/players',
                data: newPlayer
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the player!');
                console.error(err);
                return err;
            });
        },
        remove: function(newPlayer) {
            return $http({
                method: 'post',
                url: '/api/delete_player',
                data: newPlayer
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the player!');
                console.error(err);
                return err;
            });
        },
        update: function(newPlayer) {
            return $http({
                method: 'post',
                url: '/api/editplayer',
                data: newPlayer
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the player!');
                console.error(err);
                return err;
            });

        },
        add_to_top_five: function(postData) {
            return $http({
                method: 'post',
                url: '/api/add_to_top_five',
                data: postData
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the player!');
                console.error(err);
                return err;
            });

        },
        remove_top_five: function() {
            return $http({
                method: 'post',
                url: '/api/remove_top_five',
                data: ''
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the player!');
                console.error(err);
                return err;
            });

        },
        getcategories: function() {
        console.log( "in the player getcategories");

        return $http.get('/api/getcategories').then(function(categories) {
                // console.log(categories);
                // return false;
                return categories.data;
            }).catch(function(err) {
                console.error('Something went wrong getting categories!');
                console.error(err);
                return err;
            });;
        },

        getcountries: function() {
        console.log( "in the player getcountries");

        return $http.get('/api/getcountries').then(function(countries) {
                 console.log(countries);
//                 return false;
                return countries.data;
            }).catch(function(err) {
                console.error('Something went wrong getting categories!');
                console.error(err);
                return err;
            });;
        },        
        getpositions: function() {
        return $http.get('/api/getpositions').then(function(positions) {
            console.log("in the getpositions module..");
                return positions.data;
            }).catch(function(err) {
                console.error('Something went wrong getting positions!');
                console.error(err);
                return err;
            });;
        },
        getclubs: function() {
        return $http.get('/api/getclubs').then(function(clubs) {
            console.log("in the getclubs module..");
                return clubs.data;
            }).catch(function(err) {
                console.error('Something went wrong getting clubs!');
                console.error(err);
                return err;
            });;
        },        
        sigledata: function(id) {
            return $http({
                method: 'post',
                url: '/api/get_player',
                data: id
            }).then(function(res) {
                console.log(res.data);
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the player!');
                console.error(err);
                return err;
            });
        }
    };
});
