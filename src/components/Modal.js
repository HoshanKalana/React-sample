function Modal(props){

    function cancelHandler(){
        props.onCancel();
    }

    function confrimHandler(){
        props.onConfirm();
    }

    return(
        <div className="modal">
            <p>Are You Sure</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confrimHandler}>Confirm</button>
        </div>
    );
}

export default Modal;