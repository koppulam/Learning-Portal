var learningPortalController = angular.module("learningPortalController", []);

learningPortalController.controller('homeController', ['$scope', function ($scope) {
	$scope.name = "Myhome";
	$scope.id = "name1"
	$scope.isHidden = true;
	$scope.closeModal =  function(){
		$scope.isHidden = true;
	};
	//$scope.myModalId = "requestTraining";
	$scope.openModal = function () {
	  $scope.isHidden = false;
	  alert("$scope.isHidden", $scope.isHidden);
	}
}]);

learningPortalController.controller('clientTechController', ['$scope','cTrainings', function ($scope,cTrainings) {
	$scope.name = "Client side Technology Trainings";
	$scope.id = "name2";
	$scope.cTrainings = cTrainings.getClientSide();
	//console.log(cTrainings)
	$scope.toggleTrainings = function(obj,$event){
		var me = $event.target.parentElement;
		$('.trainingDetails',me).toggle('slow');
	}
	$scope.onGoingCheck = function(training){
		return onGoingCheck(training);
	}
	$scope.upComingCheck = function(training){
		return upComingCheck(training);
	}
	$scope.archiveCheck = function(training){
		return archiveCheck(training);
	}
	
}]);

learningPortalController.controller('serverTechController', ['$scope','cTrainings', function ($scope,cTrainings) {
	$scope.name = "Server side Technology Trainings";
	$scope.id = "name3";
	$scope.toggleTrainings = function(obj,$event){
		var me = $event.target.parentElement;
		$('.trainingDetails',me).toggle('slow');
	}
	$scope.cTrainings = cTrainings.getServerSide();
	
	$scope.onGoingCheck = function(training){
		return onGoingCheck(training);
	}
	$scope.upComingCheck = function(training){
		return upComingCheck(training);
	}
	$scope.archiveCheck = function(training){
		return archiveCheck(training);
	}
}]);

learningPortalController.directive('reqTraining', function () {
  return {
  	restrict: 'AE',
  	transclude: true,
  	scope: {
          'close': '&onClose',
          modalId : '=info'
        },
     templateUrl: 'views/_requestTraining.html'
  }
})
learningPortalController.directive('trainingDetail', function(){
	return {
		restrict: 'AE',
  	transclude: true,
  	templateUrl: 'views/_TrainingDetail.html'
	}
});
function onGoingCheck(trainings){
	//console.log('inside check')
  	var onGoingWeek = getWeek();
  	var startDate = new Date(trainings.dateFrom);
  	var endDate = new Date(trainings.dateTo);
  	//console.log(startDate)
  	//console.log(onGoingWeek.weekStart)
  	if(startDate.getYear() === onGoingWeek.weekStart.getYear()){
  		//console.log('same Year')
  		if(startDate.getMonth() === onGoingWeek.weekStart.getMonth()){
  			//console.log('same Month')
  				return true;
  			
  		}
  		
  	}
  	return false;
}
function upComingCheck(trainings){
	//console.log('inside check')
  	var onGoingWeek = getWeek();
  	var startDate = new Date(trainings.dateFrom);
  	var endDate = new Date(trainings.dateTo);
  	//console.log(startDate)
  	//console.log(onGoingWeek.weekStart)
  	if(startDate.getYear() >= onGoingWeek.weekStart.getYear()){
  		//console.log('same Year')
  		if(startDate.getMonth() > onGoingWeek.weekStart.getMonth()){
  			//console.log('same Month')
  		
  				return true;
  		
  		}
  		
  	}
  	return false;
}
function archiveCheck(trainings){
	var onGoingWeek = getWeek();
  	var startDate = new Date(trainings.dateFrom);
  	var endDate = new Date(trainings.dateTo);
  	if(startDate.getYear() <= onGoingWeek.weekStart.getYear()){
  		if(startDate.getMonth() < onGoingWeek.weekStart.getMonth()){
  				return true;
  		}
  		
  	}
  	return false;
}
function getWeek(){
	////console.log('get week')
	var today=new Date();
	var year=today.getFullYear();
	var month=today.getMonth();
	if (month<10){
	month="0" + month;
	};
	var date=today.getDate();
	var weekStart,weekEnd;
	switch(today.getDay()){
		case 0: 
				weekStart =new Date(year,month,date); 
				weekEnd =new Date(year,month,date+6);
				break;
		case 1: 
				weekStart =new Date(year,month,date-1);
				weekEnd = new Date(year,month,date+5);
				break; 
		case 2: 
				weekStart = new Date(year,month,date-2);
				weekEnd =  new Date(year,month,date+4);
				break; 
		case 3: 
				weekStart = new Date(year,month,date-3);
				weekEnd = new Date(year,month,date+3);
				break; 
		case 4: 
		////console.log('inisde swicth')
				weekStart =  new Date(year,month,date-4)
				weekEnd = new Date(year,month,date+2)
				break; 
		case 5: 
				weekStart =  new Date(year,month,date-5)
				weekEnd = new Date(year,month,date+1)
				break;
		case 6: 
				weekStart =  new Date(year,month,date-6)
				weekEnd = new Date(year,month,date)
				break; 
	}
	
	return {"weekStart":weekStart,"weekEnd":weekEnd}
}
