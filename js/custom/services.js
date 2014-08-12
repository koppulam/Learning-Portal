
/* Services */

var clientSideServices = angular.module('clientSideServices', ['ngResource']);

clientSideServices.factory('cTrainings',['$resource', 
	function($resource){
		return $resource('trainings/:trainingId.json',{},{
			getClientSide : {method:'GET',params:{trainingId:"clientSideTraining"},isArray:true},
			getServerSide : {method:'GET',params:{trainingId:"serverSideTraining"},isArray:true}
		});
		
	}
])
