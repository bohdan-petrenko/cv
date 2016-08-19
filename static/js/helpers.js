/**
 * Created by Petrenko on 21.03.2016.
 */
window.isMobile = function() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
};