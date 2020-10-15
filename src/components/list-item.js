import React , { useState } from 'react';
import Modal from "react-modal";
import './list-item.css';
import '../App.css';


Modal.setAppElement("#root")

function ListItem  ({name, thumbnail, description}){

  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  return(
    <div className="superheroe">
    <h3 className="name">{name}</h3>
    <img className="thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} alt="superheroe"/>
    <button className="Modal-button about" onClick={() => setModalIsOpen(true)}>KNOW MORE</button>

      <Modal 
      isOpen ={modalIsOpen} 
      onRequestClose ={() => setModalIsOpen(false)}
      className="Modal"
      >
        <button className="Modal-button" onClick={() => setModalIsOpen(false)}>X</button>
        <h3 className="name">{name}</h3>
        <img className="thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} alt="superheroe"/>
        <p className="description">{description}</p>
      </Modal>
  </div>
  )
 }
  

export default ListItem;