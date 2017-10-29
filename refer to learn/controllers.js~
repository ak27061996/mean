adminApp.controller('AllPostsCtrl', function($scope, postList,$interval,Posts,$timeout) {
    $scope.posts = postList;
    $scope.activePost = false;
    $scope.setActive = function(post) {
        $scope.activePost = post;
    }
    $timeout(function() {
        $('#example1').DataTable();
        $('#example2').DataTable({
            'paging': true,
            'lengthChange': false,
            'searching': false,
            'ordering': true,
            'info': true,
            'autoWidth': false
        })
    }, 0.500);

    
        $scope.deletepost = function(id) {
        $scope.data={};
         $scope.data.id=id;
         $('.'+id).css('display','none');
        // console.log($scope.data);
        Posts.remove($scope.data).then(function(res) {
           // console.log(res);
            if (res) {                
                $scope.del = res.message;
               // alert(res.message);
                //window.location.reload();
            } else {
                $scope.del = "error";
            }
        });
    }
});
adminApp.controller('resetPasswordCtrl', function($scope, Users, $stateParams) {
    //$scope.message=false;
    console.log($stateParams);
    console.log($stateParams.token);


console.log("yesssssssss..");
// return false;

    // $scope.resetPassword=function(){
    //     $scope.message='';
    // console.log($stateParams.token);
    //     // console.log(this.user);
    //     // return false;
    //     // if(this.user.password!=this.user.cpassword){
    //     //     $scope.message="Incorrect confirm password";
    //     //     return;
    //     // }
    //      Users.reset_password_app(this.user).then(function(res) {
    //         if (res) {
    //             $scope.message=res;
    //             console.log(res);
    //         } else {
    //             $scope.message=res;
    //             console.log(res);
    //         }
    //     });        
    // }
});
adminApp.controller('AddUserCtrl', function($scope,Users) {
    $scope.message=false;
    $scope.addUser=function(){
        if(this.user.password!=this.user.cpassword){
            $scope.message="Incorrect confirm password";
            return;
        }
         Users.add(this.user).then(function(res) {
            if (res) {
                $scope.message=res;
                console.log(res);
            } else {
                $scope.message=res;
                console.log(res);
            }
        });        
    }
}).controller('Adminlogin', function($scope,Users) {  
$scope.user ={}
$scope.user.email = 'admin@gmail.com';
$scope.user.password = 'admin';
$scope.admin_login = function (){  
 
      if(this.user.password==''){
            $scope.loginerror="Password Reuired";
            return;
        }
         Users.adminlogin(this.user).then(function(res) {  
            if (res) {  
                if(res.success){
                    window.location.href='/admin/dashboard'; 
                } 
                $scope.loginerror= res.message;  
                console.log(res);
            } else {
                $scope.loginerror=res.message;    
                console.log(res);
            }
        });  
    
}

});

adminApp.controller('singleUserViewCtrl', function($scope, Users, $stateParams) {
    console.log($stateParams);
    $scope.params = {};
    $scope.params.path = $stateParams;
    Users.getUser($stateParams).then(function(res){
        if (res == null) {
            window.location.href = '/404';
        } else {
            console.log("here");
             console.log(res);
             $scope.user = {};
            $scope.user.firstname = res.firstname;
            $scope.user.lastname = res.lastname;
            $scope.user.role = res.role;
            $scope.user.status = res.status;
            $scope.user.email = res.email;
            if(res.dob != ''){
                $scope.user.dob = new Date(res.dob);
            }
            $scope.user.id = res._id;
        }

   
    });

});

adminApp.controller('dashboardCtrl', function($scope) {

});
adminApp.controller('profileCtrl', function($scope) {

});

adminApp.controller('categoryListCtrl', function($scope, $interval,Categories,categoryList,$timeout) {


  $scope.upload = function () {
            var file = angular.element(document.querySelector('#file')).prop("files")[0];
                $scope.files = [];
                $scope.files.push(file);


        Categories.upload_file($scope).then(function(res) {
            console.log(res);
            if (res) {
                console.log(res);
                return false;
                // $scope.del = res.message;
                //window.location.reload();
            } else {
                console.log("error..");
                // $scope.del = "error";
                return false;
            }
        });


                // $http({
                //     method: 'POST',
                //     url: '/users/upload',
                //     headers: { 'Content-Type': undefined },
                //     transformRequest: function (data) {
                //         var formData = new FormData();
                //         formData.append('model', angular.toJson(data.model));
                //         formData.append('file', data.files[0]);
                //         return formData;
                //     },
                //     data: { model: { title: 'hello'}, files: $scope.files }

                // }).success(function (res) {
                //     console.log(res)
                // });
        }









console.log(categoryList);

$scope.categories = categoryList;
    $scope.activeCategory = false;
    $scope.setActive = function(category) {
        console.log("get category id..");
        console.log(category);
        $scope.activeCategory = category;
        $scope.hideShow = false;
    }
    $scope.hideShow = true;
    $scope.listShow = function(value){
        if(value == true){
            $scope.hideShow = false;
        }else{
            $scope.hideShow = true;
        }
    }        
    $timeout(function() {
        $('#example1').DataTable();
        $('#example2').DataTable({
            'paging': true,
            'lengthChange': false,
            'searching': false,
            'ordering': true,
            'info': true,
            'autoWidth': false
        })
    }, 0.500);
    
        $scope.deleteCategory = function(id) {
        $scope.data={};
         $scope.data.id=id;
         console.log(id);
          $('.'+id).css('display','none');
        // console.log($scope.data);
        Categories.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                $scope.del = res.message;
                //window.location.reload();
            } else {
                $scope.del = "error";
            }
        });
    }
});

adminApp.controller('inventoryListCtrl', function($scope, $interval,Inventories,inventoryList,$timeout, $rootScope) {


// console.log($rootScope.currentUser);    

// console.log(inventoryList);

$scope.inventories = inventoryList;
    $scope.activeInventory = false;
    $scope.setActive = function(inventory) {
        console.log("get inventory id..");
        console.log(inventory);
        $scope.activeInventory = inventory;
        $scope.hideShow = false;
    }
    $scope.hideShow = true;
    $scope.listShow = function(value){
        if(value == true){
            $scope.hideShow = false;
        }else{
            $scope.hideShow = true;
        }
    }        
    $timeout(function() {
        $('#example1').DataTable();
        $('#example2').DataTable({
            'paging': true,
            'lengthChange': false,
            'searching': false,
            'ordering': true,
            'info': true,
            'autoWidth': false
        })
    }, 0.500);
    
        $scope.deleteInventory = function(id) {
        $scope.data={};
         $scope.data.id=id;
          $('.'+id).css('display','none');
        // console.log($scope.data);
        Inventories.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                $scope.del = res.message;
                //window.location.reload();
            } else {
                $scope.del = "error";
            }
        });
    }
});

adminApp.controller('userListCtrl', function($scope, $interval,Users,userList,$timeout) {
$scope.users = userList;
    $scope.activeUser = false;
    $scope.setActive = function(user) {
        $scope.activeUser = user;
        $scope.hideShow = false;
    }
    $scope.hideShow = true;
    $scope.listShow = function(value){
        if(value == true){
            $scope.hideShow = false;
        }else{
            $scope.hideShow = true;
        }
    }        
    $timeout(function() {
        $('#example1').DataTable();
        $('#example2').DataTable({
            'paging': true,
            'lengthChange': false,
            'searching': false,
            'ordering': true,
            'info': true,
            'autoWidth': false
        })
    }, 0.500);
    
        $scope.deleteUser = function(id) {
        $scope.data={};
         $scope.data.id=id;
          $('.'+id).css('display','none');
        // console.log($scope.data);
        Users.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                $scope.del = res.message;
                //window.location.reload();
            } else {
                $scope.del = "error";
            }
        });
    }
        $scope.userStatus = function(event, $curent_status, id) {
        $scope.data={};
        // $scope.user.status={};

        // console.log("event");
        // console.log(event.target.id);
        // console.log(event.target.html);

        // event.target.html = 'aaaa';
        // console.log(event.target.html);
        // $('#' + event.target.id).html('Asasadsad');
        // $scope.showActive + '_' + id = true;
        var xx = '_' + id;
        $scope.xx = true;
        // $scope.showActive = true;
        // $scope.id = id;
        console.log("$scope.userstatus");
        // console.log($event);
        console.log(id);
        $scope.data.id=id;
        $scope.data.flag = 1;
        Users.user_status($scope.data).then(function(res) {
            console.log(res);
            if (res) {

		if(res.flag == 0)
		{
			$scope.xx = true;
			$('.user_'+id).html('Inactive');
		}
		else
		{
		 	$scope.xx = false;
			$('.user_'+id).html('Active');
		}
                $scope.del = res.message;
                //window.location.reload();
            } else {
                $scope.del = "error";
            }
        });
    }    
});


adminApp.controller('stockListCtrl', function($scope, $interval,Clubs,stockList,$timeout) {
console.log(stockList);
$scope.stocks = stockList;
    $scope.activeClub = false;
    $scope.setActive = function(stock) {
        console.log("get stock id..");
        console.log(stock);
        $scope.activeClub = stock;
        $scope.hideShow = false;
    }
    $scope.hideShow = true;
    $scope.listShow = function(value){
        if(value == true){
            $scope.hideShow = false;
        }else{
            $scope.hideShow = true;
        }
    }        
    $timeout(function() {
        $('#example1').DataTable();
        $('#example2').DataTable({
            'paging': true,
            'lengthChange': false,
            'searching': false,
            'ordering': true,
            'info': true,
            'autoWidth': false
        })
    }, 0.500);
    
        $scope.deleteClub = function(id) {
        $scope.data={};
         $scope.data.id=id;
          $('.'+id).css('display','none');
        // console.log($scope.data);
        Clubs.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                $scope.del = res.message;
                //window.location.reload();
            } else {
                $scope.del = "error";
            }
        });
    }
});


adminApp.controller('supportListCtrl', function($scope, $interval,Supports,supportList,$timeout) {
console.log(supportList);
$scope.supports = supportList;
    $scope.activeSupport = false;
    $scope.setActive = function(support) {
        console.log("get support id..");
        console.log(support);
        $scope.activeSupport = support;
        $scope.hideShow = false;
    }
    $scope.hideShow = true;
    $scope.listShow = function(value){
        if(value == true){
            $scope.hideShow = false;
        }else{
            $scope.hideShow = true;
        }
    }        
    $timeout(function() {
        $('#example1').DataTable();
        $('#example2').DataTable({
            'paging': true,
            'lengthChange': false,
            'searching': false,
            'ordering': true,
            'info': true,
            'autoWidth': false
        })
    }, 0.500);
    
        $scope.deleteSupport = function(id) {
        $scope.data={};
         $scope.data.id=id;
          $('.'+id).css('display','none');
        // console.log($scope.data);
        Supports.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                $scope.del = res.message;
                //window.location.reload();
            } else {
                $scope.del = "error";
            }
        });
    }
});
// support Support


adminApp.controller('clubListCtrl', function($scope, $interval,Clubs,clubList,$timeout) {
console.log(clubList);
$scope.clubs = clubList;
    $scope.activeClub = false;
    $scope.setActive = function(club) {
        console.log("get club id..");
        console.log(club);
        $scope.activeClub = club;
        $scope.hideShow = false;
    }
    $scope.hideShow = true;
    $scope.listShow = function(value){
        if(value == true){
            $scope.hideShow = false;
        }else{
            $scope.hideShow = true;
        }
    }        
    $timeout(function() {
        $('#example1').DataTable();
        $('#example2').DataTable({
            'paging': true,
            'lengthChange': false,
            'searching': false,
            'ordering': true,
            'info': true,
            'autoWidth': false
        })
    }, 0.500);
    
        $scope.deleteClub = function(id) {
        $scope.data={};
         $scope.data.id=id;
          $('.'+id).css('display','none');
        // console.log($scope.data);
        Clubs.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                $scope.del = res.message;
                //window.location.reload();
            } else {
                $scope.del = "error";
            }
        });
    }
});
// club Club

adminApp.controller('positionListCtrl', function($scope, $interval,Positions,positionList,$timeout) {
console.log(positionList);
$scope.positions = positionList;
    $scope.activePosition = false;
    $scope.setActive = function(position) {
        console.log("get position id..");
        console.log(position);
        $scope.activePosition = position;
        $scope.hideShow = false;
    }
    $scope.hideShow = true;
    $scope.listShow = function(value){
        if(value == true){
            $scope.hideShow = false;
        }else{
            $scope.hideShow = true;
        }
    }        
    $timeout(function() {
        $('#example1').DataTable();
        $('#example2').DataTable({
            'paging': true,
            'lengthChange': false,
            'searching': false,
            'ordering': true,
            'info': true,
            'autoWidth': false
        })
    }, 0.500);
    
        $scope.deletePosition = function(id) {
        $scope.data={};
         $scope.data.id=id;
          $('.'+id).css('display','none');
        // console.log($scope.data);
        Positions.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                $scope.del = res.message;
                //window.location.reload();
            } else {
                $scope.del = "error";
            }
        });
    }
});

// position positions Position Positions


adminApp.controller('pageListCtrl', function($scope, $interval,Pages,pageList,$timeout) {
console.log(pageList);
$scope.pages = pageList;
    $scope.activePage = false;
    $scope.setActive = function(page) {
        console.log("get page id..");
        console.log(page);
        $scope.activePage = page;
        $scope.hideShow = false;
    }
    $scope.hideShow = true;
    $scope.listShow = function(value){
        if(value == true){
            $scope.hideShow = false;
        }else{
            $scope.hideShow = true;
        }
    }        
    $timeout(function() {
        $('#example1').DataTable();
        $('#example2').DataTable({
            'paging': true,
            'lengthChange': false,
            'searching': false,
            'ordering': true,
            'info': true,
            'autoWidth': false
        })
    }, 0.500);
    
        $scope.deletePage = function(id) {
        $scope.data={};
         $scope.data.id=id;
          $('.'+id).css('display','none');
        // console.log($scope.data);
        Pages.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                $scope.del = res.message;
                //window.location.reload();
            } else {
                $scope.del = "error";
            }
        });
    }
});

// page pages Page Pages


adminApp.controller('transactionListCtrl', function($scope, $interval,Transactions,transactionList,$timeout) {

console.log(transactionList);

$scope.transactions = transactionList;
    $scope.activeTransaction = false;
    $scope.setActive = function(transaction) {
        console.log("get transaction id..");
        console.log(transaction);
        $scope.activeTransaction = transaction;
        $scope.hideShow = false;
    }
    $scope.hideShow = true;
    $scope.listShow = function(value){
        if(value == true){
            $scope.hideShow = false;
        }else{
            $scope.hideShow = true;
        }
    }
    $timeout(function() {
        $('#example1').DataTable();
        $('#example2').DataTable({
            'paging': true,
            'lengthChange': false,
            'searching': false,
            'ordering': true,
            'info': true,
            'autoWidth': false
        })
    }, 0.500);
    
        $scope.deleteTransaction = function(id) {
        $scope.data={};
         $scope.data.id=id;
          $('.'+id).css('display','none');
        // console.log($scope.data);
        Transactions.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                $scope.del = res.message;
                //window.location.reload();
            } else {
                $scope.del = "error";
            }
        });
    }
});

// transaction Transaction

adminApp.controller('playerListCtrl', function($scope, $interval,Players,playerList,$timeout) {

console.log(playerList);

$scope.players = playerList;
    $scope.activePlayer = false;
    $scope.setActive = function(player) {
        console.log("get player id..");
        console.log(player);
        $scope.activePlayer = player;
        $scope.hideShow = false;
    }
    $scope.hideShow = true;
    $scope.listShow = function(value){
        if(value == true){
            $scope.hideShow = false;
        }else{
            $scope.hideShow = true;
        }
    }
    $timeout(function() {
        $('#example1').DataTable();
        $('#example2').DataTable({
            'paging': true,
            'lengthChange': false,
            'searching': false,
            'ordering': true,
            'info': true,
            'autoWidth': false
        })
    }, 0.500);
    
        $scope.deletePlayer = function(id) {
        $scope.data={};
         $scope.data.id=id;
          $('.'+id).css('display','none');
        // console.log($scope.data);
        Players.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                $scope.del = res.message;
                //window.location.reload();
            } else {
                $scope.del = "error";
            }
        });
    }


        $scope.topFive = function($event, id) {
        $scope.data={};
        console.log("$scope.topfive");
        console.log($event);
        console.log(id);
         $scope.data.id=id;
         $scope.data.flag = $event;
          // $('.'+id).css('display','none');
        console.log($scope.data);
        Players.add_to_top_five($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                $scope.del = res.message;
                //window.location.reload();
            } else {
                $scope.del = "error";
            }
        });
    }


        $scope.clearTopFive = function() {
        $scope.data={};
        Players.remove_top_five().then(function(res) {
            console.log(res);
            if (res) {
                $scope.del = res.message;
                //window.location.reload();
            } else {
                $scope.del = "error";
            }
        });
    }
});

adminApp.controller('playerTopFiveListCtrl', function($scope, $interval, Players, playerTopFiveList, $timeout) {

console.log("playerTopFiveList");
console.log(playerTopFiveList);

$scope.players = playerTopFiveList;
    $scope.activePlayer = false;

    $scope.setActive = function(player) {
        console.log("get player id..");
        console.log(player);
        $scope.activePlayer = player;
        $scope.hideShow = false;
    }
    $scope.hideShow = true;
    $scope.listShow = function(value){
        console.log("list show..");
        if(value == true){
            $scope.hideShow = false;
        }else{
            $scope.hideShow = true;
        }
    }
    $timeout(function() {
        $('#example1').DataTable();
        $('#example2').DataTable({
            'paging': true,
            'lengthChange': false,
            'searching': false,
            'ordering': true,
            'info': true,
            'autoWidth': false
        })
    }, 0.500);
    
        $scope.deletePlayer = function(id) {
        $scope.data={};
         $scope.data.id=id;
          $('.'+id).css('display','none');
        // console.log($scope.data);
        Players.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                $scope.del = res.message;
                //window.location.reload();
            } else {
                $scope.del = "error";
            }
        });
    }




});

// player Player

adminApp.controller('AddPostCtrl', function($scope, Posts) {
    console.log("AddPostCtrl in admin js controller..");
    $scope.addPost = function() {       
         console.log(this.post);
          Posts.add(this.post).then(function(res) {
              console.log(res);
            if (res) {
                $scope.message=res;
            } else {
                $scope.message=res;
            }
        });           
    };
});
/**
 * EditPostsCtrl
 */
adminApp.controller('EditPostsCtrl', function($scope, Posts, $stateParams) {
    $scope.post = {};
    $scope.params = {};
    $scope.params.path = $stateParams.paraml;
    Posts.sigledata($scope.params).then(function(res) {
        if (res == null) {
            window.location.href = '/404';
        } else {
             console.log(res);
            $scope.post.description = res.description;
            $scope.post.himage = res.himage;
            $scope.post.simage = res.simage;
            $scope.post.title = res.title;
            $scope.post.paramal = res.paramal;
            $scope.post.metadescription = res.metadescription;
            $scope.post.metakeywords = res.metakeywords;
            $scope.post.category = res.category;
            $scope.post.id = res._id;
        }
    });
    $scope.editPost = function() {
        $scope.update=false;
        $scope.newPost = {};
        $scope.newPost.simage = this.post.simage;
        $scope.newPost.himage = this.post.himage;
        $scope.newPost.title = this.post.title;
        $scope.newPost.description = this.post.description;
        $scope.newPost.metadescription = this.post.metadescription;
        $scope.newPost.metakeywords = this.post.metakeywords;
        $scope.newPost.paramal = this.post.paramal;
        $scope.newPost.category = this.post.category;
        $scope.newPost.id = this.post.id;
        Posts.update($scope.newPost).then(function(res) {
            console.log(res);
            if (res) {
                $scope.update = res;
            } else {
                $scope.update = "error";
            }
            // console.log(res);
        });
    }
})


adminApp.controller('AddCategoryCtrl', function($scope, Categories) {
    console.log("AddCategoryCtrl in admin js controller..");



  // $scope.upload = function () {
  //           var file = angular.element(document.querySelector('#file')).prop("files")[0];
  //               $scope.files = [];
  //               $scope.files.push(file);

  //       Categories.upload_file($scope).then(function(res) {
  //           console.log(res);
  //           if (res) {
  //               console.log(res);
  //               return false;
  //               // $scope.del = res.message;
  //               //window.location.reload();
  //           } else {
  //               console.log("error..");
  //               // $scope.del = "error";
  //               return false;
  //           }
  //       });
  //       }



    $scope.addCategory = function() {
         console.log(this.category);



            var file = angular.element(document.querySelector('#file')).prop("files")[0];
                $scope.files = [];
                $scope.files.push(file);
                this.category.image = file;

         // console.log(this.category.image);
         // console.log(this.category.image.name);
        //   Categories.onFileSelect($scope.files, this.category).then(function(res) {
        //       console.log(res);
        //     if (res) {
        //         console.log("after upload..");
        //         $scope.message=res;
        //     } else {
        //         console.log("upload failed..");
        //         $scope.message=res;
        //     }
        // });  
          Categories.add(this.category).then(function(res) {
              console.log(res);
            if (res) {
                        var file = angular.element(document.querySelector('#file')).prop("files")[0];
                            $scope.files = [];
                            $scope.files.push(file);
                          Categories.onFileSelect($scope.files, res).then(function(res) {
                            if (res) {
                                $scope.message=res;
                            } else {
                                $scope.message=res;
                            }
                        });


                $scope.message=res;
            } else {
                $scope.message=res;
            }
        });
    };
});

/**
 * EditCategoriesCtrl
 */
adminApp.controller('EditCategoriesCtrl', function($scope, Categories, $stateParams) {
    $scope.category = {};
    $scope.params = {};
    $scope.params.path = $stateParams.id;
    Categories.sigledata($scope.params).then(function(res) {
console.log("check if res avalable");;
console.log(res);
console.log(res.title);
        if (res == null) {
            window.location.href = '/404';
        } else {
             console.log(res);
            $scope.category.description = res.description;
            $scope.category.title = res.title;
            $scope.category.id = res._id;
        }
    });
    $scope.editCategory = function() {
        $scope.update=false;
        $scope.newCategory = {};
        $scope.newCategory.title = this.category.title;
        $scope.newCategory.description = this.category.description;
        $scope.newCategory.id = this.category.id;

// console.log(this.category);
// return false;


        Categories.update($scope.newCategory).then(function(res) {
            console.log(res);
            if (res) {
                $scope.update = res;
            } else {
                $scope.update = "error";
            }
            // console.log(res);
        });
    }
})
// Categories




adminApp.controller('AddInventoryCtrl', function($scope, Inventories, $rootScope) {
    console.log("AddInventoryCtrl in admin js controller..");


    console.log($rootScope.currentUser);
    // $scope.categorylist = {};
    // // $scope.user_id = $rootScope.currentUser._id;
    // Inventories.getcategories().then(function(res) {
    //     if (res == null) {
    //         window.location.href = '/404';
    //     } else {
    //          console.log(res);
    //         $scope.categorylist = res;
    //     }
    // });
    $scope.playerlist = {};
    Inventories.getplayers().then(function(res) {
        if (res == null) {
            $scope.playerlist = "";
        } else {
             console.log(res);
            $scope.playerlist = res;
        }
    });



    $scope.addInventory = function() {
         // console.log($rootScope.currentUser._id);
         this.inventory.user_id = $rootScope.currentUser._id;
         console.log(this.inventory);
          Inventories.add(this.inventory).then(function(res) {
              console.log(res);
            if (res) {
                $scope.message=res;
            } else {
                $scope.message=res;
            }
        });           
    };
});

/**
 * EditInventoriesCtrl
 */
adminApp.controller('EditInventoriesCtrl', function($scope, Inventories, $stateParams, $rootScope) {
    $scope.inventory = {};
    $scope.params = {};
    $scope.params.id = $stateParams.id;

    $scope.playerlist = {};
    Inventories.getplayers().then(function(res) {
        if (res == null) {
            $scope.playerlist = "";
        } else {
             console.log(res);
            $scope.playerlist = res;
        }
    });    
    
    Inventories.sigledata($scope.params).then(function(res) {
console.log("check if res avalable");;
console.log(res);
//console.log(res.title);
        if (res == null) {
            window.location.href = '/404';
        } else {
             console.log(res);
            $scope.inventory.price = res.price;
            $scope.inventory.quantity = res.quantity;
            $scope.inventory.player_id= res.player_id;
            $scope.inventory.id = res._id;
        }
    });
    $scope.editInventory = function() {
        $scope.update=false;
        $scope.newInventory = {};
        $scope.newInventory.price= this.inventory.price;
        $scope.newInventory.quantity = this.inventory.quantity;
        $scope.newInventory.id = this.inventory.id;
        $scope.newInventory.user_id = $rootScope.currentUser._id;
        $scope.newInventory.player_id = this.inventory.player_id;

// console.log(this.inventory);
// return false;


        Inventories.update($scope.newInventory).then(function(res) {
            console.log(res);
            if (res) {
                $scope.update = res;
            } else {
                $scope.update = "error";
            }
            // console.log(res);
        });
    }
})
// Inventory inventory categories Inventories




adminApp.controller('AddStockCtrl', function($scope, Stocks) {
    console.log("AddStockCtrl in admin js controller..");


    // $scope.stock = {};
    // $scope.params = {};
    $scope.categorylist = {};
    // $scope.params.path = $stateParams.id;
    Stocks.getcategories().then(function(res) {
        if (res == null) {
            window.location.href = '/404';
        } else {
             console.log(res);
            $scope.categorylist = res;
        }
    });





    $scope.addStock = function() {
        console.log("yes in the addStock..");
         console.log(this.stock);
          Stocks.add(this.stock).then(function(res) {
            console.log(res);
            if (res) {
                $scope.message=res;
            } else {
                $scope.message=res;
            }
        });           
    };
});

/**
 * EditStocksCtrl
 */
adminApp.controller('EditStocksCtrl', function($scope, Stocks, $stateParams) {
    $scope.stock = {};
    $scope.params = {};
    $scope.params.path = $stateParams.id;
    Stocks.sigledata($scope.params).then(function(res) {
console.log("check if res avalable");
console.log(res);
console.log(res.title);
        if (res == null) {
            window.location.href = '/404';
        } else {
             console.log(res);
            $scope.stock.category = res.category;
            $scope.stock.title = res.title;
            $scope.stock.id = res._id;
        }
    });
    $scope.editStock = function() {
        $scope.update=false;
        $scope.newStock = {};
        $scope.newStock.title = this.stock.title;
        $scope.newStock.category = this.stock.category;
        $scope.newStock.id = this.stock.id;

console.log(this.stock);
// return false;


        Stocks.update($scope.newStock).then(function(res) {
            console.log(res);
            if (res) {
                $scope.update = res;
            } else {
                $scope.update = "error";
            }
            // console.log(res);
        });
    }
})
// Stock Stocks stock categories



adminApp.controller('AddClubCtrl', function($scope, Clubs) {
    console.log("AddClubCtrl in admin js controller..");


    // $scope.club = {};
    // $scope.params = {};
    $scope.categorylist = {};
    // $scope.params.path = $stateParams.id;
    Clubs.getcategories().then(function(res) {
        if (res == null) {
            window.location.href = '/404';
        } else {
             console.log(res);
            $scope.categorylist = res;
        }
    });





    $scope.addClub = function() {
        console.log("yes in the addClub..");
         console.log(this.club);
          Clubs.add(this.club).then(function(res) {
            console.log(res);
            if (res) {
                $scope.message=res;
            } else {
                $scope.message=res;
            }
        });           
    };
});

/**
 * EditClubsCtrl
 */
adminApp.controller('EditClubsCtrl', function($scope, Clubs, $stateParams) {
    $scope.club = {};
    $scope.params = {};
    $scope.params.id = $stateParams.id;
    Clubs.sigledata($scope.params).then(function(res) {
console.log("check if res avalable");
console.log(res);
console.log(res.title);
        if (res == null) {
            window.location.href = '/404';
        } else {
             console.log(res);
            $scope.club.title = res.title;
            $scope.club.id = res._id;
        }
    });
    $scope.editClub = function() {
        $scope.update=false;
        $scope.newClub = {};
        $scope.newClub.title = this.club.title;
        $scope.newClub.category = this.club.category;
        $scope.newClub.id = this.club.id;

console.log(this.club);
// return false;


        Clubs.update($scope.newClub).then(function(res) {
            console.log(res);
            if (res) {
                $scope.update = res;
            } else {
                $scope.update = "error";
            }
            // console.log(res);
        });
    }
})
// Club Clubs club clubs


adminApp.controller('AddPositionCtrl', function($scope, Positions) {
    console.log("AddPositionCtrl in admin js controller..");


    // $scope.position = {};
    // $scope.params = {};
    $scope.categorylist = {};
    // $scope.params.path = $stateParams.id;
    Positions.getcategories().then(function(res) {
        if (res == null) {
            window.location.href = '/404';
        } else {
             console.log(res);
            $scope.categorylist = res;
        }
    });





    $scope.addPosition = function() {
        console.log("yes in the addPosition..");
         console.log(this.position);
          Positions.add(this.position).then(function(res) {
            console.log(res);
            if (res) {
                $scope.message=res;
            } else {
                $scope.message=res;
            }
        });           
    };
});

/**
 * EditPositionsCtrl
 */
adminApp.controller('EditPositionsCtrl', function($scope, Positions, $stateParams) {
    $scope.position = {};
    $scope.params = {};
    $scope.params.id = $stateParams.id;
    Positions.sigledata($scope.params).then(function(res) {
console.log("check if res avalable");
console.log(res);
console.log(res.title);
        if (res == null) {
            window.location.href = '/404';
        } else {
             console.log(res);
            // $scope.position.category = res.category;
            $scope.position.title = res.title;
            $scope.position.id = res._id;
        }
    });
    $scope.editPosition = function() {
        $scope.update=false;
        $scope.newPosition = {};
        $scope.newPosition.title = this.position.title;
        // $scope.newPosition.category = this.position.category;
        $scope.newPosition.id = this.position.id;

console.log(this.position);
// return false;


        Positions.update($scope.newPosition).then(function(res) {
            console.log(res);
            if (res) {
                $scope.update = res;
            } else {
                $scope.update = "error";
            }
            // console.log(res);
        });
    }
})
// Position Positions position positions


adminApp.controller('AddPageCtrl', function($scope, Pages) {
    console.log("AddPageCtrl in admin js controller..");


    // $scope.page = {};
    // $scope.params = {};
    $scope.categorylist = {};
    // $scope.params.path = $stateParams.id;
    Pages.getcategories().then(function(res) {
        if (res == null) {
            window.location.href = '/404';
        } else {
             console.log(res);
            $scope.categorylist = res;
        }
    });





    $scope.addPage = function() {
        console.log("yes in the addPage..");
         console.log(this.page);
          Pages.add(this.page).then(function(res) {
            console.log(res);
            if (res) {
                $scope.message=res;
            } else {
                $scope.message=res;
            }
        });           
    };
});

/**
 * EditPagesCtrl
 */
adminApp.controller('EditPagesCtrl', function($scope, Pages, $stateParams) {
    $scope.page = {};
    $scope.params = {};
    $scope.params.id = $stateParams.id;
    Pages.sigledata($scope.params).then(function(res) {
console.log("check if res avalable");
console.log(res);
console.log(res.title);
        if (res == null) {
            window.location.href = '/404';
        } else {
             console.log(res);
            // $scope.page.category = res.category;
            $scope.page.title = res.title;
            $scope.page.id = res._id;
        }
    });
    $scope.editPage = function() {
        $scope.update=false;
        $scope.newPage = {};
        $scope.newPage.title = this.page.title;
        // $scope.newPage.category = this.page.category;
        $scope.newPage.id = this.page.id;

console.log(this.page);
// return false;


        Pages.update($scope.newPage).then(function(res) {
            console.log(res);
            if (res) {
                $scope.update = res;
            } else {
                $scope.update = "error";
            }
            // console.log(res);
        });
    }
})
// Page Pages page pages


adminApp.controller('AddPlayerCtrl', function($scope, Players) {
    console.log("AddPlayerCtrl in admin js controller..");

    $scope.categorylist = {};
    $scope.positionlist = {};
    $scope.clublist = {};
    // $scope.params.path = $stateParams.id;
    Players.getcountries().then(function(res) {
        if (res == null) {
            $scope.countrieslist = "";
        } else {
            $scope.countrieslist = res;
        }
    });    
    Players.getcategories().then(function(res) {
        if (res == null) {
            $scope.categorylist = "";
        } else {
            $scope.categorylist = res;
        }
    });
    Players.getpositions().then(function(res) {
        if (res == null) {
            $scope.positionlist = "";
        } else {
            $scope.positionlist = res;
        }
    });
    Players.getclubs().then(function(res) {
        if (res == null) {
            $scope.clublist = "";
        } else {
            $scope.clublist = res;
        }
    });    





    $scope.addPlayer = function() {
        console.log("yes in the addPlayer..");
         console.log(this.player);
          Players.add(this.player).then(function(res) {
            console.log(res);
            if (res) {

                        var file = angular.element(document.querySelector('#player_image')).prop("files")[0];
                            $scope.files = [];
                            $scope.files.push(file);
                          Players.onFileSelect($scope.files, res, 'add').then(function(res) {
                            if (res) {
                                $scope.message=res;
                            } else {
                                $scope.message=res;
                            }
                        });




                $scope.message=res;
            } else {
                $scope.message=res;
            }
        });           
    };
});

/**
 * EditPlayersCtrl
 */
adminApp.controller('EditPlayersCtrl', function($scope, Players, $stateParams) {
    $scope.player = {};
    $scope.player.id = $stateParams.id;

    $scope.categorylist = {};
    $scope.positionlist = {};
    $scope.clublist = {};
    // $scope.params.path = $stateParams.id;
    Players.getcategories().then(function(res) {
        if (res == null) {
            $scope.categorylist = "";
        } else {
            $scope.categorylist = res;
        }
    });
    Players.getpositions().then(function(res) {
        if (res == null) {
            $scope.positionlist = "";
        } else {
            $scope.positionlist = res;
        }
    }); 
    Players.getclubs().then(function(res) {
        if (res == null) {
            $scope.clublist = "";
        } else {
            $scope.clublist = res;
        }
    }); 



    Players.sigledata($scope.player).then(function(res) {
console.log("check if res avalable");
console.log(res);
console.log(res.title);
        if (res == null) {
            window.location.href = '/404';
        } else {
             console.log(res);
            $scope.player.title = res.title;
            $scope.player.club = res.club;
            $scope.player.position = res.position;
            $scope.player.position_side = res.position_side;
            $scope.player.birth_date = res.birth_date;
            $scope.player.birth_place = res.birth_place;
            $scope.player.preferred_foot = res.preferred_foot;
            $scope.player.height = res.height;
            $scope.player.weight = res.weight;
            $scope.player.shirt_number = res.shirt_number;
            $scope.player.country = res.country;
            $scope.player.category = res.category;
            $scope.player.player_image = res.player_image;
            $scope.player.buy = res.buy;
            $scope.player.sell = res.sell;
            $scope.player.id = res._id;
        }
    });
    $scope.editPlayer = function() {
        $scope.update=false;
        $scope.newPlayer = {};
        $scope.newPlayer.title = this.player.title;
        $scope.newPlayer.club = this.player.club;
        $scope.newPlayer.position = this.player.position;
        $scope.newPlayer.position_side = this.player.position_side;
        $scope.newPlayer.birth_date = this.player.birth_date;
        $scope.newPlayer.birth_place = this.player.birth_place;
        $scope.newPlayer.preferred_foot = this.player.preferred_foot;
        $scope.newPlayer.height = this.player.height;
        $scope.newPlayer.weight = this.player.weight;
        $scope.newPlayer.shirt_number = this.player.shirt_number;
        $scope.newPlayer.country = this.player.country;            
        $scope.newPlayer.category = this.player.category;
        $scope.newPlayer.buy = this.player.buy;
        $scope.newPlayer.sell = this.player.sell;
        $scope.newPlayer.id = this.player.id;

console.log(this.player);
// return false;


        Players.update($scope.newPlayer).then(function(res) {
            console.log(res);
            if (res) {


                        var file = angular.element(document.querySelector('#player_image')).prop("files")[0];

                        if(typeof file != 'undefined'){
                            $scope.files = [];
                            $scope.files.push(file);
                          Players.onFileSelect($scope.files, res, 'update').then(function(res) {
                            if (res) {
                                $scope.update=res;
                            } else {
                                $scope.update=res;
                            }
                        });
                      }

            console.log("edit player updated.." + res);
            // console.log("file.." + file);
                // $scope.message=res;
                    if(typeof file != 'undefined'){
                        $scope.update=res;
                    }
                    else
                    {
                        $scope.update="You have successfully updated player.";
                    }
            } else {
                $scope.update = "error";
            }
            // console.log(res);
        });
    }
})
// player Player




adminApp.controller('EditUsersCtrl', function($scope, Users, $stateParams) {
     $scope.user = {};
    $scope.params = {};
    $scope.params.path = $stateParams.id;
   // console.log( $scope.params.path);
    Users.sigledata($scope.params).then(function(res) {
        if (res == null) {
            window.location.href = '/404';
        } else {
             console.log(res);
            $scope.user.firstname = res.firstname;
            $scope.user.lastname = res.lastname;
            $scope.user.role = res.role;
            $scope.user.status = res.status;
            $scope.user.email = res.email;
            $scope.user.dob = new Date(res.dob);
            $scope.user.id = res._id;
        }
    });
    $scope.editUser = function() {
        $scope.update=false;
        $scope.newUser = {};
        
        $scope.newUser.firstname = this.user.firstname;
        $scope.newUser.lastname = this.user.lastname;
        $scope.newUser.status = this.user.status;
        $scope.newUser.role = this.user.role;
        $scope.newUser.dob = this.user.dob;
        $scope.newUser.id = this.user.id;
        Users.update($scope.newUser).then(function(res) {
            console.log(res);
            if (res) {
                $scope.update = res;
            } else {
                $scope.update = "error";
            }
            // console.log(res);
        });
    }
})
