import React from 'react';

function ModalBody(props) {
    return (
        <div className="modal-body">
            <p>
                {props.content}
            </p>
        </div>
    );
}

export default ModalBody;