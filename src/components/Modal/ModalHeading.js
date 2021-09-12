import React from 'react';

function ModalHeading(props) {
    return(
        <div className="modal-heading">
            <h6>
                {props.content}
            </h6>
        </div>
    );
}

export default ModalHeading;