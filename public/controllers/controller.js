var app = angular.module('myApp', ['ngRoute']);
app.controller('appCtrl', function($scope,$http) {
	console.log("geds");
	var refresh=function(){
	$http.get('/contactlist').success(function(response){
 		console.log("got the data");
		$scope.contactlist=response;
		$scope.contact="";
	});
};
refresh();
	$scope.addContact=function()
	{
		console.log($scope.contact);
		$http.post('/contactlist',$scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	};
	$scope.remove=function(id){
        console.log(id);
        $http.delete('/contactlist/'+id).success(function(response){
            console.log(response);
            refresh();
        });
	};

	$scope.edit=function(id){
         console.log(id);
        $http.get('/contactlist/'+id).success(function(response){
        	$scope.contact=response;
        });
	};

	$scope.update=function(){
		   var id=$scope.contact._id;
            console.log(id);
            $http.put('/contactlist/'+$scope.contact._id,$scope.contact).success(function(response){
                    refresh();
            });
	};

	});