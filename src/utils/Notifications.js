
import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Toast } from 'react-bootstrap';
import {
    cleanError
} from '../features/movies/moviesSlice';

export function Notifications(props) {
    const [show, setShow] = useState(true);
    const dispatch = useDispatch();    
    
    const onCloseNotification= () => {
        new Promise((resolve, reject) => resolve(setShow(false)))
                             .then(() => dispatch(cleanError(props.index)));
    }
    const wrapper = React.createRef();

    const notification = (
        <div key={wrapper} style={{position: 'absolute', minHeight: 100, top: props.index ? props.index * 105 : 5, right: 0, zIndex:999999}} ref={wrapper}>
            <Toast key={props.index} onClose={() => onCloseNotification()} show={show} delay={5000} autohide style={{}} >
                    <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                    />
                    <strong className="mr-auto">Error</strong>
                    <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>{ props.message}</Toast.Body>
                </Toast>
        </div>
            );

    return (
        <Fragment>
            { notification }
        </Fragment>
    );
  }