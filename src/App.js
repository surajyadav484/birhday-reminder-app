import React, { useState } from 'react';
import data from './data';
import List from './List';
import InsertData from './Components/InsertData';



function App() {

  const [persons, setPersonState] = useState(data);
  const [showModal, setShowModal] = useState(false)

  const openModal = (event) => {
    setShowModal(true)
  }
  const closeModal = (event) => {
    document.getElementById('insertData').reset();
    setShowModal(false)
  }



  console.log(showModal);

  return (
    <div>
      <div>
        <button className='addBirthDay' onClick={openModal}>Add More Birthdays</button>
        <InsertData showModal={showModal} openModal={openModal} closeModal={closeModal} />

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
