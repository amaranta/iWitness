window.IWitness = Ember.Application.create();

// fill in test data
$(function(){
  _.delay(function(){
    $("#start_date").val("2/12/2012").trigger('change');
    $("#start_time").val("10:00 PM").trigger('change');
    $("#end_date").val("2/12/2012").trigger('change');
    $("#end_time").val("11:00 PM").trigger('change');
  }, 500);
});
