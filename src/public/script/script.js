const urlAPI = "https://advice-generator-mtb1.onrender.com";

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