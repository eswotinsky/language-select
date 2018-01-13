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
    $("div.results").hide()
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
    $("div.results").hide()
    q2 = $("input:radio[name=lgVsSm]:checked").val();
    $("#uxVsBackend").show();
  })

  //Question 3: Websites vs Apps?
  //store user choice in var q3
  //if user selects "websites", display lgVsSm2 and hide androidVsWindows
  //else if user selects "apps", display androidVsWindows and hide smVsLg
  $("[name=webVsApps]").change(function() {
    $("div.results").hide()
    q3 = $("input:radio[name=webVsApps]:checked").val();
    if (q3 == "websites") {
      $("#lgVsSm2").show()
      $("#androidVsWindows").hide()
    }
    else if (q3 == "apps") {
      $("#lgVsSm2").hide()
      $("#androidVsWindows").show()
    }
  })

  //Question 4: UX vs Backend?
  //store user choice in var q4
  //if user selects "ux", display CSS div
  //else if user selects "backend", AND if user selected "large" for q2, display phpDrupal div
  //else if user selects "backend", AND if user selected "small" for q2, display rubyRails div
    $("[name=uxVsBackend]").change(function() {
      $("div.results").hide()
      q4 = $("input:radio[name=uxVsBackend]:checked").val();
      if (q4 == "ux") {
        $("#css").show();
      }
      else if (q4 == "backend" && q2 == "large") {
        $("#phpDrupal").show();
      }
      else if (q4 == "backend" && q2 == "small") {
        $("div#rubyRails").show();
      }
    })

  //Question 5: Android vs Windows?
  //store user choice in var q5
  //if user selects "android", display javaAndroid div
  //else if user selects "windows", display cSharpDotNet div
  $("[name=androidVsWindows]").change(function() {
    $("div.results").hide()
    q5 = $("input:radio[name=androidVsWindows]:checked").val();
    if (q5 == "android") {
      $("div#javaAndroid").show();
    }
    else if (q5 == "windows") {
      $("div#cSharpDotNet").show();
    }
  })

  //Question 6: Large Company or Small v2?
  //store user choice in var q6
  //if user selects "large", display phpDrupal div
  //else if user selects "small", display rubyRails div
  $("[name=lgVsSm2]").change(function() {
    $("div.results").hide()
    q6 = $("input:radio[name=lgVsSm2]:checked").val();
    if (q6 == "large") {
      $("div#phpDrupal").show();
    }
    else if (q6 == "small") {
      $("div#rubyRails").show();
    }
  })

})
