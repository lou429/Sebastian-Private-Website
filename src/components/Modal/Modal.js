import React, {useState, useEffect} from 'react';
import ModalHeading from './ModalHeading.js';
import ModalBody from './ModalBody.js';
import ModalOptions from './ModalOptions.js';
import './Modal.scss';


// Wrapper for the Modal objects
function Modal(props) {
    const [ModalIsVisible, SetModalVisibility] = useState(false);

    useEffect(function setModalVisibility(state) {
        SetModalVisibility(state);
    }, []);

    function GetModalClassName(state) {
        var className = 'modal-wrapper';
        if(!state) className += ' hide';
        return className; 
    }

    return (
        <div className={GetModalClassName(ModalIsVisible)}>
            <ModalHeading content={props.heading}/>
            <ModalBody content={props.body}/>
            <ModalOptions options={props.options} content={props.text}/>
        </div>
    );
}

Modal.defaultProps = {
    heading: "Warning",
    body: "You have a warning",
    text: "",
    state: false,
    options: ""
};


export default Modal;