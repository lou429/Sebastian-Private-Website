import $ from 'jquery'; 

function LoadPage() {
    setActiveAnchor();
}

function getWindowLocation() {
    let location = window.location.pathname;
    return location.toString();
}

function setActiveAnchor() {
    let location = '/' + getWindowLocation();
    $('nav-link').each(function() {
        if($(this).attr('href') === location)
            $(this).toggleClass('-active');
    });
}

export default LoadPage;