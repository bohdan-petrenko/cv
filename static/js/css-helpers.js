/**
 * Created by Petrenko on 19.08.2016.
 */
$(function () {
    var lastScrollPosition = Math.pow(10, 9),
        isMenuVisible = true;//optimization
    $(window).scroll(function() {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        try {
            if (scrollPosition < 86) {
                if(!isMenuVisible) {
                    $(".menu").removeClass("hidden");
                    isMenuVisible = true;
                }
                return;
            }
            if (lastScrollPosition < scrollPosition) {
                if (isMenuVisible) {
                    $(".menu").addClass("hidden");
                    isMenuVisible = false;
                }
            } else {
                if (!isMenuVisible) {
                    $(".menu").removeClass("hidden");
                    isMenuVisible = true;
                }
            }
        } finally {
            lastScrollPosition = scrollPosition;
        }
    });
});