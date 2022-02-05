import React, { useState } from 'react';
import data from './data';
import List from './List';
// import Modal from 'react-modal';
import InsertData from './Components/InsertData';



function App() {

  const [persons, setPersonState] = useState(data);
  const [showModal, setShowModal] = useState(false)

  const openModal = (event)=>{
    setShowModal(true)
  }
  const closeModal = (event)=>{
    document.getElementById('insertData').reset();
    setShowModal(false)
  }

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // }

  // const handleClose = () => setShowModal(false);
  // const handleShow = () => setShowModal(true);

  console.log(showModal);

  return (
    <div>
      <div>
        <button  className='addBirthDay'  onClick={openModal}>Add More Birthdays</button>
          <InsertData showModal= {showModal} openModal={openModal} closeModal={closeModal} />

        {/* 
      ====================
      one way of adding modal to react *
      =====================
      /}
      {/* 
        <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        Hello
      </Modal> 
      */}

        {/* 
      ===================
      Bootstrap Modal
      ===================
      */}

        
      </div>
      <main>

        <section className='container'>
          <h3>Birthdays today</h3>
          <List data={persons} />
          <button onClick={() => { setPersonState([]) }}>clear all</button>
        </section>
      </main>
    </div>)
}

export default App;
