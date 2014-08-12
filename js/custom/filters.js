/**
 * @author ssupraja
 */
/* Filters */
angular.module('TrainingFilters', []).filter('onGoingCheck', function() {
  return function(trainings) {
  	console.log('inside check')
  	var onGoingWeek = getWeek();
  	console.log(trainings);
  	console.log('('+onGoingWeek.weekStart+'<'+ trainings.dateFrom+') && ('+onGoingWeek.weekEnd+'>'+ trainings.dateTo+')')
  	if((onGoingWeek.weekStart< trainings.dateFrom) && (onGoingWeek.weekEnd> trainings.dateTo)){
  		return true;
  	}
	
     //return input ? '\u2713' : '\u2718';
  };
});
