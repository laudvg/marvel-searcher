import React , { useState } from 'react';
import Modal from "react-modal";
import './list-item.css';


Modal.setAppElement("#root")

function ListItem  ({name, thumbnail, description}){

  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  return(
    <div className="superheroe">
    <h3 className="name">{name}</h3>
    <img className="thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} alt="superheroe"/>
    <button onClick={() => setModalIsOpen(true)}>About</button>

      <Modal 
      isOpen ={modalIsOpen} 
      onRequestClose ={() => setModalIsOpen(false)}

      style = {
        { 
          overlay:{
            backgroundColor: "#000000"
          }
        },
        {
          content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            marginTop             : '2%',
            transform             : 'translate(-50%, -50%)'
          }
        }
      }
      >
        <button onClick={() => setModalIsOpen(false)}>X</button>
        <h3 className="name">{name}</h3>
        <img className="thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} alt="superheroe"/>
        <p className="description">{description}</p>
      </Modal>
  </div>
  )
 }
  

export default ListItem;