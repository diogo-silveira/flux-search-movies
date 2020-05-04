import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Details(props){
   const {Title, Actors, Awards, BoxOffice, Country, Poster, Director, Genre, Plot, Production, Runtime, Writer, imdbRating, imdbVotes, Year } = props.item;
    
    return (
        <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {Title}  ({Year})
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row col-12">
                <div className="col-8"><p>{Plot}</p>
                <p><b>Production</b> - {Production}</p>
                <p><b>Rating</b> - {imdbRating}</p>
                <p><b>Duration</b> - {Runtime}</p>
                <p><b>Votes</b> - {imdbVotes}</p>
                <p><b>Actors</b> - {Actors}</p>
                <p><b>Genre</b> - {Genre}</p>
                <p><b>Country</b> - {Country}</p>
                <p><b>Box Office</b> - {BoxOffice}</p>
                <p><b>Awards</b> - {Awards}</p>
                <p><b>Director</b> - {Director}</p>
                <p><b>Writer</b> - {Writer}</p>
            </div>
                <div className="col-4"><img className="w-100" src={Poster} alt={Title}/></div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
    );

}
