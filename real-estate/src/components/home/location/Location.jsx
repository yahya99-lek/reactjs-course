import React from 'react'
import Heading from '../../common/Heading'
import { location } from '../../data/Data'
import "./location.css"
const Location = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          
          <Heading title="Explore by location" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione doloremque placeat explicabo delectus necessitatibus ducimus molestias maiores recusandae voluptas, distinctio provident ullam in sint adipisci itaque consequuntur assumenda autem!"/>
          <div className="content grid3 mtop">
            {location.map((items,index) => {
              return (
                <div className="box"key={index}>
                  <img src={items.cover} alt="" />
                  <div className="overlay">
                    <h5>{items.name}</h5>
                    <p>
                      <label>{items.Villas}</label>
                      <label>{items.Offices}</label>
                      <label>{items.Apartments}</label>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location