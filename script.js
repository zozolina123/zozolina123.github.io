target = $("nav").offset().top;
targetSkills = $("#skills").offset().top;
targetPortfolio = $("#portfolio").offset().top;
$( document ).ready(function() {
    $(document).on("scroll", function(e) {
        if($(document).scrollTop()>target)
        {
            $("nav.navbar").css("position","sticky");
        }
        else{
            $("nav.navbar").css("position","sticky");
        }
        if($(document).scrollTop()>targetSkills)
          console.log("skills");
          $("#skills ul li").slideDown(2500);
  });
});

