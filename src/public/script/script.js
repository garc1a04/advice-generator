const urlAPI = "http://localhost:3000";

function mouseIn() {
    $(".dice").mouseenter(function () {
        $(this).addClass("mouse-in");
    });

  $(".dice").mouseleave(function () {
    $(this).removeClass("mouse-in");
  });
}

function click() {
  $(".dice").click(function (e) { 
      window.location.href = urlAPI+"/api";    
  });
}

mouseIn();
click();