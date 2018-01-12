$(document).ready(function(){

  //declare variables to hold user responses
  var q1;
  var q2;
  var q3;
  var q4;
  var q5;

  //Question 1: Creative or Logic?
  //store user choice in var q1
  //if user selects "creative", display smVsLg and hide webVsApps
  //else if user selects "logic", display webVsApps and hide smVsLg
  $("[name=creativeVsLogic]").change(function() {
    q1 = $("input:radio[name=creativeVsLogic]:checked").val();
    if (q1 == "creative") {
      $("#lgVsSm").show();
      $("#webVsApps").hide()
    }
    else if (q1 == "logic") {
      $("#lgVsSm").hide();
      $("#webVsApps").show()
    }
  })

  //Question 2: Large Company or Small?
  //store user choice in var q2
  //regardless of user choice, display uxVsBackend
  $("[name=lgVsSm]").change(function() {
    $("uxVsBackend").show()
  })


})
