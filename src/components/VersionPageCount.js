import react from 'react';

function VersionPageCount(props) {
    return(
        <div className="page-count-direction">
            <h6>
            <span className="version-current-page">
                {props.currentPage}
            </span>
            <span className="version-page-count-separator">
                /    
            </span> 
            <span className="version-page-total">
                {props.pageCount}
            </span>
            </h6>
        </div>
    );
}

export default VersionPageCount;