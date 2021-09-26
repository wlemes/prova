
$(document).ready(function () {
    $("#myCarousel").carousel();
    
    $(".left").click(function () {
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function () {
        $("#myCarousel").carousel("next");
    });
});