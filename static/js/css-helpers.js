/**
 * Created by Petrenko on 19.08.2016.
 */
$(function () {
    var lastScrollPosition = Math.pow(10, 9);
    $(window).scroll(function() {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollPosition < 86) {
            $(".menu").removeClass("hidden"); return;
        }
        if (lastScrollPosition < scrollPosition)
            $(".menu").addClass("hidden");
        else
            $(".menu").removeClass("hidden");
        lastScrollPosition = scrollPosition;
    });
});