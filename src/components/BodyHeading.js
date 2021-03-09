import Helmet from 'react-helmet';

function getTitle(heading) {
    let start = "Sebastian's "
    return start + heading;
}

function getContent() {
    
}

function BodyHeading(props) {
    return(
        <div className="content-heading">
            <Helmet>
                <title>{getTitle(props.heading)}</title>
                <meta name="description" content={getContent}/>
            </Helmet>
            <h1>{props.heading}</h1>
        </div>
    )
}

export default BodyHeading;