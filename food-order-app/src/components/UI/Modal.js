import classes from './Modal.module.css';
import React,{Fragment} from 'react';


import  ReactDOM  from 'react-dom';

const Backdrops = (props) =>
{
    return <div className={classes.backdrop} onClick={props.onClose}/>;
};
const ModalOverlay = (props) =>{
    return(
        <div className={classes.modal}>
        <div className={classes.content}/>{props.children}
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  return <Fragment>
        {ReactDOM.createPortal(<Backdrops onClose={props.onClose}/>,portalElement)}
        {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement)}
    </Fragment>
  
};

export default Modal;