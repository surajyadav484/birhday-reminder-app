import React from 'react';

const List = ({ data }) => {

  // const date = new Date();
  // console.log(date.getDate());
  // console.log(date.getMonth() + 1);
  // console.log(typeof date);

  return (
    <>

      {
        data.map((d) => {
          const { id, name, dob, image } = d;

          const currentDate = new Date().getDate();
          const currentMonth = new Date().getMonth();
          const currentYear = new Date().getFullYear();

          const birthDate = new Date(dob).getDate();
          const birthMonth = new Date(dob).getMonth();
          const birthYear = new Date(dob).getFullYear();
          let age =currentYear-birthYear;
          let birthdayPeople = null;

          if (birthDate === currentDate && birthMonth === currentMonth) {
            birthdayPeople = (
            <article key={id} className='person'>
              <img src={image} alt="image" />
              <div>
                <h4>{name}</h4>
                <h4>{age} years old</h4>
              </div>
            </article>
            )
          }

          return (
            birthdayPeople
          )
        })

      }

    </>
  );
};

export default List;
