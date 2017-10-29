/**
 * NavCtrl
 * @param {type} param1
 * @param {type} param2
 */
adminApp.controller('NavCtrl', function($scope, $state) {
    $scope.active = $state;
    $scope.isActive = function(viewLocation) {
        var active = (viewLocation === $state.current.name);
        return active;
    };
})
/*
* Dashboard controller
*/
adminApp.controller('dashboardCtrl', function($scope) {
    
});

/**
 * AllUsersCtrl
 */
adminApp.controller('AllUsersCtrl', function($scope, userList,Users,$location) {
    console.log('userList')
    $scope.users = userList;
    $scope.activePost = false;
    $scope.setActive = function(user) {
        $scope.activeUser = user;
        console.log($scope.activeUser);
        
    }
    $scope.deleteUser = function(id) {
        $scope.data={};
         $scope.data.id=id;
         console.log($scope.data);
        Users.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                alert(res.message);
               // window.location.reload();
            } else {
                $scope.update = "error";
            }
        });
    }
});
/*
* Add user
*/
adminApp.controller('addUserCtrl',function($scope,Users){
    $scope.user = {}
    $scope.addUser = function(){
        console.log(this.user);
        $scope.newUser = {};
        $scope.newUser.email = this.user.email;
        $scope.newUser.password = this.user.password;
        $scope.newUser.firstname = this.user.firstname;
        $scope.newUser.lastname = this.user.lastname;
        $scope.newUser.dob = this.user.dob;
        $scope.newUser.role = this.user.role;
        $scope.newUser.status = this.user.status;

        Users.add($scope.newUser).then(function(res) {
            console.log(res);
        });
        console.log('added')
        // Users.add($scope.newPost);
        this.user = {};
        
    }
});
/**
 * EditUsersCtrl
 */
adminApp.controller('editUserCtrl', function($scope, Users, $stateParams) {
    $scope.user = {};
    $scope.params = {};
    $scope.params.path = $stateParams.paraml;
    Users.sigledata($scope.params).then(function(res) {
        if (res == null) {
            window.location.href = '/404';
        } else {
            // console.log(res);
            $scope.user.firstname = res.firstname;
            $scope.user.lastname = res.lastname;
            $scope.user.email = res.email;
            $scope.user.dob = res.dob;
            $scope.user.role = res.role;
            $scope.user.id = res._id;
        }
    });
    $scope.editPost = function() {

        $scope.newPost = {};
        $scope.newPost.firstname = this.user.firstname;
        $scope.newPost.lastname = this.user.lastname;
        $scope.newPost.email = this.user.email;
        $scope.newPost.dob = this.user.dob;
        $scope.newPost.role = this.user.role;
        $scope.newPost.id = this.post.id;
        Users.update($scope.newPost).then(function(res) {
            console.log(res);
            if (res) {
                $scope.update = res.message;
                alert(res.message);
            } else {
                $scope.update = "error";
            }
            // console.log(res);
        });
    }
})
/**
 * AllUsersCtrl
 */

adminApp.controller('addCategoryCtrl', function($scope,Category) {
    $scope.post={};
    $scope.addPost = function() {
        console.log(this.post);
        $scope.newPost = {};
        $scope.newPost.title = this.post.title;
        $scope.newPost.slug = this.post.slug;
        $scope.newPost.description = this.post.description;
        Category.add($scope.newPost).then(function(res) {
            console.log(res);
            
        });
        this.post = {};
    };
});

adminApp.controller('CategoryListCtrl',function($rootScope,$scope,categoryList,Category) {
    $rootScope.posts=categoryList;
    $scope.posts = categoryList;
    $scope.activePost = false;
    $scope.setActive = function(user) {
        $scope.activePost = user;
        console.log($scope.activePost);
    }
    $scope.deletepost = function(id) {
        $scope.data={};
         $scope.data.id=id;
        // console.log($scope.data);
        $('.'+id).css('display','none');
        Category.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                alert(res.message);
             //   window.location.reload();
            } else {
                $scope.update = "error";
            }
        });
    }
});

/**
 * EditCategoryCtrl
 */
adminApp.controller('editCategoryCtrl', function($scope, Category, $stateParams) {
    $scope.post = {};
    $scope.params = {};
    $scope.params.path = $stateParams.paraml;
    Category.sigledata($scope.params).then(function(res) {
        console.log(res);
        if (res == null) {
            window.location.href = '/404';
        } else {
            // console.log(res);
            $scope.post.title = res.title;
            $scope.post.slug = res.slug;
            $scope.post.description = res.description;
            $scope.post.id = res._id;
        }
    });
	
    $scope.editPost = function() {
    $scope.newPost = {};
    $scope.newPost.title = this.post.title;
    $scope.newPost.description = this.post.description;
    $scope.newPost.id = this.post.id;
    Category.update($scope.newPost).then(function(res) {
    console.log(res);
            if (res) {
                $scope.message = "updated";//res.message;
                alert(res.message);
            } else {
                $scope.message = "error";
            }
          //   console.log(res);
        });
    }
});


adminApp.controller('ProductListCtrl',function($scope,productList,Product) {
    
//*********my code for category**************

 $scope.categoryList={};

    Product.get_cat().then(function(res) {
        if (res == null) {
    $scope.categoryList={};
            $scope.categoryList= "";
        } else {
            $scope.categoryList= res;
        }
    });

//******************************************


    $scope.posts = productList;
    $scope.activePost = false;
    $scope.setActive = function(user) {
        $scope.activePost = user;
        console.log($scope.activePost);
    }
    $scope.deletepost = function(id) {
        $scope.data={};
         $scope.data.id=id;
        // console.log($scope.data);
        $('.'+id).css('display','none');
        Product.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                alert(res.message);
             //   window.location.reload();
            } else {
                $scope.update = "error";
            }
        });
    }
});


adminApp.controller('editProductCtrl', function($scope, Product, $stateParams) {
    $scope.post = {};
    $scope.params = {};
    $scope.params.path = $stateParams.paraml;
    Product.sigledata($scope.params).then(function(res) {
        console.log(res);
        if (res == null) {
            window.location.href = '/404';
        } else {
            // console.log(res);
            $scope.post.title = res.title;
                 
            $scope.post.price = res.price;
            $scope.post.attr = res.attr;
		console.log("editctrl ");
            $scope.post.condition = res.condition;
            $scope.post.discount = res.discount;
     
            $scope.post.cat_id = res.cat_id;
            $scope.post.description = res.description;
            $scope.post.product_image = res.product_image; 
              
            $scope.post.id = res._id;


        }
    });
	
    $scope.editPost = function() {
    $scope.newPost = {};
    $scope.newPost.title = this.post.title;

	$scope.newPost.price = this.post.price;
	$scope.newPost.discount = this.post.discount;
	$scope.newPost.attr = this.post.attr;
	$scope.newPost.condition = this.post.condition;

    $scope.newPost.description = this.post.description;
    $scope.newPost.id = this.post.id;
    Product.update($scope.newPost).then(function(res) {   
         console.log(res);
//******************************my code****************************
                      if (res) {

                        var file = angular.element(document.querySelector('#product_image')).prop("files")[0];

                        if(typeof file != 'undefined'){
                            $scope.files = [];
                            $scope.files.push(file);
                          Product.onFileSelect($scope.files, res, 'update').then(function(res) {
                            if (res) {
                                $scope.message=res;
                            } else {
                                $scope.message=res;
                            }
                        });
                      }
                    // alert('updated ');
            console.log("edit product updated.." + res);
           
                    if(typeof file != 'undefined'){
                        $scope.message=res;
                       // alert(res.message);
                    }
                    else
                    {
                        $scope.message="You have successfully updated product.";
                          // alert($scope.update); 
                    }
                   
            } else {
                $scope.update = "error";
            }
         /*************************************************/
            /*if (res) {
                $scope.update = res.message;
                alert(res.message);
            } else {
                $scope.update = "error";
            }*/
            // console.log(res);
        });
    }
});

adminApp.controller('addProductCtrl', function($scope,Product) {
    $scope.post={};
    $scope.categoryList={};

    Product.get_cat().then(function(res) {
        if (res == null) {
    $scope.categoryList={};
            $scope.categoryList= "";
        } else {
            $scope.categoryList= res;
        }
    });
      
    $scope.addPost = function() {
        console.log(this.post);
        $scope.newPost = {};
        $scope.newPost.title = this.post.title;
        
        $scope.newPost.price = this.post.price;            
        $scope.newPost.condition = this.post.condition;
        $scope.newPost.discount = this.post.discount;
        $scope.newPost.attr = this.post.attr;        

        
       // $scope.i=0;

        $scope.newPost.cat_id = this.post.cat_id;
        $scope.newPost.description = this.post.description;
        Product.add($scope.newPost).then(function(res) {
            console.log( "your image res "+res);
             //************   my code ************************************************
            if (res) {
                   
                        //var file = angular.element(document.querySelector('#product_image')).prop("files")[0];
                            //$scope.files =[];
                            //console.log(" file length " + file.length +" file=" +file[2]);
                            /*for(var i=0;i<file.length;i++){
                                  console.log(i);
                                     console.log("image = " + file[i]); 
                                     $scope.files.push(file[i]);
                                      
                               }*/

                              //console.log("rerrrrrr "+ files[0]);

                            for(var i=0;i<angular.element(document.querySelector('#product_image')).prop("files").length;i++){
						var file=angular.element(document.querySelector('#product_image')).prop("files")[i];
						$scope.files =[];
							$scope.files.push(file);
                               Product.onFileSelect($scope.files, res, 'add').then(function(res) {
                            if (res) {
                                $scope.message=res;
                            } else {
                                $scope.message=res;
                            }
                        });

                $scope.message=res;
                     }
            } 
            else {
                $scope.message=res;
            }
//***********************************************
               
        });
        this.post = {};
    };
});


adminApp.controller('OrderListCtrl',function($scope,orderList,Order) {
    
    $scope.posts = orderList;
    $scope.activePost = false;
    $scope.setActive = function(user) {
        $scope.activePost = user;
        console.log($scope.activePost);
    }

  /* Order.all($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                alert(res.message);
             //   window.location.reload();
            } else {
                $scope.update = "error";
            }
}*/
    $scope.deletepost = function(id) {
        $scope.data={};
         $scope.data.id=id;
        // console.log($scope.data);
        $('.'+id).css('display','none');

        Order.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                alert(res.message);
             //   window.location.reload();
            } else {
                $scope.update = "error";
            }
        });
    }
});




//*********************************************page controller**********************************




adminApp.controller('PageListCtrl',function($scope,pagetList,Page) {
    
    $scope.posts = pageList;
    $scope.activePost = false;
    $scope.setActive = function(user) {
        $scope.activePost = user;
        console.log($scope.activePost);
    }
    $scope.deletepost = function(id) {
        $scope.data={};
         $scope.data.id=id;
        // console.log($scope.data);
        $('.'+id).css('display','none');
        Page.remove($scope.data).then(function(res) {
            console.log(res);
            if (res) {
                alert(res.message);
             //   window.location.reload();
            } else {
                $scope.update = "error";
            }
        });
    }
});


adminApp.controller('editPageCtrl', function($scope, Page, $stateParams) {
    $scope.post = {};
    $scope.params = {};
    $scope.params.path = $stateParams.paraml;
    Page.sigledata($scope.params).then(function(res) {
        console.log(res);
        if (res == null) {
            window.location.href = '/404';
        } else {
            // console.log(res);
            $scope.post.title = res.title;
            $scope.post.design = res.design;
            $scope.post.description = res.description;
            $scope.post.id = res._id;
        }
    });
	
    $scope.editPost = function() {
    $scope.newPost = {};
    $scope.newPost.title = this.post.title;
    $scope.newPost.description = this.post.description;
    $scope.newPost.design = this.post.design;
    $scope.newPost.id = this.post.id;
    Page.update($scope.newPost).then(function(res) {
    console.log(res);
            if (res) {
                $scope.update = res.message;
                alert(res.message);
            } else {
                $scope.update = "error";
            }
            // console.log(res);
        });
    }
});

adminApp.controller('addPageCtrl', function($scope,Page) {
    $scope.post={};
    $scope.addPost = function() {
        console.log(this.post);
        $scope.newPost = {};
        $scope.newPost.title = this.post.title;
        $scope.newPost.design = this.post.design;
        $scope.newPost.description = this.post.description;
        Page.add($scope.newPost).then(function(res) {
            console.log(res);        
        });
        this.post = {};
    };
});


