import React from 'react';

function ModalOptions(props) {
    return(
        <div className="modal-footer">
            <div className="modal-footer-text">
                {props.content}
            </div>
            <div className="modal-footer-options">
                {props.options}
            </div>
        </div>
    );
}

export default ModalOptions;