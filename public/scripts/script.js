window.onload(function() {
    var person = {
        address: device.
        id: 
        sessionId: 
        type: navigator.userAgent;
    };

    
});

function WriteCookie(name, value, days) {
    var date, expires; 
    if(days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires=" + date.toGMTString();
    }
    else 
        expires = "";
    
    document.cookie = name + "=" + value + expires + "; path=/";
}