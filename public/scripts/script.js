window.onload(function() {
    var person = {
        address: navigator.serviceWorker,
        id: 1231,
        sessionId: 213123,
        type: navigator.userAgent
    };

    WriteCookie("person", person, 1); 
    console.log(document.cookie);   
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