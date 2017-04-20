angular
  .module("ContactManagerApp")
  .controller("EditCtrl",["$scope","$http","$routeParams",
  function ($scope,$http,$routeParams){
    
    console.log("Controller Edit initialized (splited right)");
    
   
    
    
    function refresh(){
      $http
          .get("/api/v1/contacts/"+$routeParams.name)
          .then(function (response){
              $scope.updateContact = response.data;
                  
          });
    }  
    
    $scope.addContact = function (){
      $http
        .post("/api/v1/contacts",$scope.newContact)
        .then(function (response){
            console.log("Contact added");
            refresh();
        });
    
    }

    $scope.deleteContact = function (name){
      console.log("Deleting contact "+name+"....");
        $http
        .delete("/api/v1/contacts/"+name)
        .then(function (response){
            console.log("Contact deleted");
            refresh();
        });
    }
  
    refresh();
  }]);