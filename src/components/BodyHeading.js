import Helmet from 'react-helmet';

// Convert text to title 
function getTitle(heading) {
    let start = "Sebastian's ";
    return start + toProperCase(heading);
}

// Return proper case for text
function toProperCase(text) {  
    return text.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');  
}  
//Return content of page
function getContent(heading) {
    return heading + "-no-content";
}

function BodyHeading(props) {
    return(
        <div className="content-heading">
            <Helmet>
                <title>{getTitle(props.heading)}</title>
                <meta name="description" content={getContent(props.heading)}/>
            </Helmet>
            <h1>{props.heading}</h1>
        </div>
    );
}

export default BodyHeading;