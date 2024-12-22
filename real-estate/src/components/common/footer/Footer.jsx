import React from 'react'
import { footer } from '../../data/Data'
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
            <div className="send flex">
                <div className="text">
                    <h1>Do you have Questions?</h1>
                    <p>We'll help you with what you need</p>
                </div>
                <button className="btn5">Contact Us Today</button>
            </div>
        </div>
      </section>
      <footer>
        <div className="container">
            <div className="box">
                <div className="logo">
                    <img src='../images/logo-light.png' alt="" />
                    <h2>Do you need help woth something?</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et repellat quos similique libero nostrum quisquam a. Recusandae cum, molestiae quos ab incidunt voluptatibus dolorem velit doloribus saepe, sequi debitis veniam?</p>
                    <div className="input flex">
                        <input type="text" placeholder='Email Address' name='' id='' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            {footer.map((val) => (
               <div className="box">
                <h3>{val.title}</h3>
                <ul>
                    {val.text.map((items) => (
                        <li>{items.list}</li>
                    ))}
                </ul>
               </div> 
            ))}
        </div>
      </footer>
      <div className="legal">
        <span> 2021 RentUp. Designed by Yahya Lekhlidi.</span>
      </div>
    </>
  )
}

export default Footer