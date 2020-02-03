var ng=angular.module('myapp', ['ngMaterial']);
         ng.controller('HelloController',['$scope','$rootScope',function($scope,$rootScope) {
         $scope.Ironman={};
         $scope.hider=2;
         $scope.Ironman.name="IRONMAN";
         $rootScope.athletes={};
         $scope.group='';
         $scope.groups=['M18-24',
         				  'M25-29',
         				  'M30-34',
         				  'M35-39',
         				  'M40-44',
         				  'M45-49',
         				  'M50-54',
         				  'M55-59',
         				  'M60-64',
         				  'M65-69',
         				  'M70-74',
         				  'M75-79',
         				  'F18-24',
         				  'F25-29',
         				  'F30-34',
         				  'F35-39',
         				  'F40-44',
         				  'F45-49',
         				  'F50-54',
         				  'F55-59',
         				  'F60-64',
         				  'F65-69',
         				  'F70-74',
         				  'F75-79'
         ];
         $scope.init= function(message){
          var fad= new XMLHttpRequest();
                fad.open('GET',"http://localhost:8080/hello/index",true);
                fad.send();
                fad.addEventListener("readystatechange", processRequest, false);
                fad.onreadystatechange= processRequest;
                function processRequest(e) {
                    if(fad.readyState == 4 && fad.status == 200) {
                     var response= JSON.parse(fad.responseText);
                     $rootScope.athletes=response;
                    }
                    $scope.hider=1;
                }
         };

         $scope.init("message");
         $scope.filterByAgeGroup = function(athlete) {

         };
       /*  $scope.msg= function(message){
                
                var fad= new XMLHttpRequest();
                fad.open('GET',"http://localhost:8080/hello/index",true);
                fad.send();
                fad.addEventListener("readystatechange", processRequest, false);
                fad.onreadystatechange= processRequest;
                function processRequest(e) {
                    if(fad.readyState == 4 && fad.status == 200) {
                     var response= JSON.parse(fad.responseText);
                     $rootScope.athletes=response;
                    }
                }
             
         };
         */
}]);

      ng.controller("SecondController",function($scope){


      	$scope.word="fire";
      });

    /*
            $scope.helloTo = {};
            $scope.gha="FALSE"
            $scope.values = {};
            $scope.helloTo.title = "IRONMAN ";
            var request = new XMLHttpRequest();
            request.open("GET","http://localhost:8080/hello",true);
            request.onload = function(){
            var data = JSON.parse(this.response)
            data.forEach(val => {
            $scope.gha="TRUE"
            $scope.values=$scope.values.concat(val)

         });
  */