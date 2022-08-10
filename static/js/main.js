function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isChrome() {
    return /Chrome/i.test(navigator.userAgent);
}

function isMicrosoftEdge() {
    return /Edge/i.test(navigator.userAgent);
}

function isMozillaFirefox() {
    return /Firefox/i.test(navigator.userAgent);
}

function isAllowedToShowLanding() {
    if (isMobileDevice()) {
        return false;
    }
    return isChrome() || isMicrosoftEdge() || isMozillaFirefox();
}

function showLanding() {
    var view = document.getElementById("landing-view");
    view.style.display = "block";
}

function hideLanding() {
    var view = document.getElementById("landing-view");
    view.style.display = "none";
}

function showPdf() {
    var view = document.getElementById("pdf-view");
    view.style.display = "block";
    var frame = document.getElementById("pdf-frame");
    frame.width = window.innerWidth - 10;
    frame.height = window.innerHeight - 10;
}
function hidePdf() {
    var view = document.getElementById("pdf-view");
    view.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    if (isAllowedToShowLanding()) {
        hidePdf();
        showLanding();
    } else {
        hideLanding();
        showPdf();
    }
});

window.addEventListener('resize', function(event) {
    if (!isAllowedToShowLanding()) {
        showPdf();
    }
});