$(document).ready(function(){

  //declare variables to hold user responses
  var qCreativeVsLogic;
  var qLgVsSm;
  var qWebVsApp;
  var qUxVsBackend;
  var qAndVsWin;
  var qLgVsSm2;

  //Question 1: Creative or Logic?
  //store user choice in var qCreativeVsLogic
  //if user selects "creative", display lgVsSm and hide other questions
  //else if user selects "logic", display webVsApps and hide other questions
  $("[name=creativeVsLogic]").change(function() {
    $("div.results").hide()
    qCreativeVsLogic = $("input:radio[name=creativeVsLogic]:checked").val();
    if (qCreativeVsLogic == "creative") {
      $("#lgVsSm").show();
      $("#webVsApps, #lgVsSm2, #uxVsBackend, #androidVsWindows").hide()
    }
    else if (qCreativeVsLogic == "logic") {
      $("#lgVsSm, #lgVsSm2, #uxVsBackend, #androidVsWindows").hide();
      $("#webVsApps").show()
    }
  })

  //Question 2: Large Company or Small?
  //store user choice in var qLgVsSm
  //regardless of user choice, display uxVsBackend
  $("[name=lgVsSm]").change(function() {
    $("div.results").hide()
    qLgVsSm = $("input:radio[name=lgVsSm]:checked").val();
    $("#webVsApps, #lgVsSm2, #androidVsWindows").hide()
    $("#uxVsBackend").show();
  })

  //Question 3: Websites vs Apps?
  //store user choice in var qWebVsApp
  //if user selects "websites", display lgVsSm2 and hide lower-level questions
  //else if user selects "apps", display androidVsWindows and hide lower-level questions
  $("[name=webVsApps]").change(function() {
    $("div.results").hide()
    qWebVsApp = $("input:radio[name=webVsApps]:checked").val();
    if (qWebVsApp == "websites") {
      $("#lgVsSm2").show()
      $("#lgVsSm, #uxVsBackend, #androidVsWindows").hide()
    }
    else if (qWebVsApp == "apps") {
      $("#lgVsSm, #lgVsSm2, #uxVsBackend").hide()
      $("#androidVsWindows").show()
    }
  })

  //Question 4: UX vs Backend?
  //store user choice in var qUxVsBackend
  //if user selects "ux", display CSS div
  //else if user selects "backend", AND if user selected "large" for qLgVsSm, display phpDrupal div
  //else if user selects "backend", AND if user selected "small" for qLgVsSm, display rubyRails div
    $("[name=uxVsBackend]").change(function() {
      $("div.results").hide()
      qUxVsBackend = $("input:radio[name=uxVsBackend]:checked").val();
      if (qUxVsBackend == "ux") {
        $("#cssDesign").show();
      }
      else if (qUxVsBackend == "backend" && qLgVsSm == "large") {
        $("#phpDrupal").show();
      }
      else if (qUxVsBackend == "backend" && qLgVsSm == "small") {
        $("div#rubyRails").show();
      }
    })

  //Question 5: Android vs Windows?
  //store user choice in var qAndVsWin
  //if user selects "android", display javaAndroid div
  //else if user selects "windows", display cSharpDotNet div
  $("[name=androidVsWindows]").change(function() {
    $("div.results").hide()
    qAndVsWin = $("input:radio[name=androidVsWindows]:checked").val();
    if (qAndVsWin == "android") {
      $("div#javaAndroid").show();
    }
    else if (qAndVsWin == "windows") {
      $("div#cSharpDotNet").show();
    }
  })

  //Question 6: Large Company or Small v2?
  //store user choice in var qLgVsSm2
  //if user selects "large", display phpDrupal div
  //else if user selects "small", display rubyRails div
  $("[name=lgVsSm2]").change(function() {
    $("div.results").hide()
    qLgVsSm2 = $("input:radio[name=lgVsSm2]:checked").val();
    if (qLgVsSm2 == "large") {
      $("div#phpDrupal").show();
    }
    else if (qLgVsSm2 == "small") {
      $("div#rubyRails").show();
    }
  })

})
