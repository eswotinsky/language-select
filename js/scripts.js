$(document).ready(function(){

  //declare variables to hold user responses
  var q1;
  var q2;
  var q3;
  var q4;
  var q5;
  var q6;

  //Question 1: Creative or Logic?
  //store user choice in var q1
  //if user selects "creative", display lgVsSm and hide webVsApps
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
    q2 = $("input:radio[name=lgVsSm]:checked").val();
    $("#uxVsBackend").show();
  })

  //Question 3: Websites vs Apps?
  //store user choice in var q3
  //if user selects "websites", display smVsLg and hide webVsApps
  //else if user selects "apps", display webVsApps and hide smVsLg
  $("[name=webVsApps]").change(function() {
    q3 = $("input:radio[name=webVsApps]:checked").val();
    if (q3 == "websites") {
      $("#lgVsSm2").show();
      $("#androidVsWindows").hide()
    }
    else if (q3 == "apps") {
      $("#lgVsSm2").hide();
      $("#androidVsWindows").show()
    }
  })

  //Question 4: UX vs Backend?
  //store user choice in var q4
  //if user selects "ux", display CSS div
  //else if user selects "backend", AND if user selected "large" for q2, hide all other results and display phpDrupal div
  //else if user selects "backend", AND if user selected "small" for q2, hide all other results and display rubyRails div
    $("[name=uxVsBackend]").change(function() {
    q4 = $("input:radio[name=uxVsBackend]:checked").val();
    if (q4 == "ux") {
      $("#css").show();
    }
    else if (q4 == "backend" && q2 == "large") {
      $(".results").hide();
      $("#phpDrupal").show();
    }
    else if (q4 == "backend" && q2 == "small") {
      $(".results").hide();
      $("div#rubyRails").show();
    }
  })

  //Question 5: Android vs Windows?
  //store user choice in var q5
  //if user selects "android", hide all other results and display javaAndroid div
  //else if user selects "windows", hide all other results and display cSharpDotNet div
  $("[name=androidVsWindows]").change(function() {
    q5 = $("input:radio[name=androidVsWindows]:checked").val();
    if (q5 == "android") {
      $("div.results").hide()
      $("div#javaAndroid").show();
    }
    else if (q5 == "windows") {
      $("div.results").hide()
      $("div#cSharpDotNet").show();
    }
  })

  //Question 6: Large Company or Small v2?
  //store user choice in var q6
  //if user selects "large", hide all other results and display phpDrupal div
  //else if user selects "small", hide all other results and display rubyRails div
  $("[name=lgVsSm2]").change(function() {
    q6 = $("input:radio[name=lgVsSm2]:checked").val();
    if (q6 == "large") {
      $("div.results").hide()
      $("div#phpDrupal").show();
    }
    else if (q6 == "small") {
      $("div.results").hide()
      $("div#rubyRails").show();
    }
  })

})
