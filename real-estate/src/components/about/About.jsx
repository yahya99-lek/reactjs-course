import React from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import img from "../images/about.jpg"
import   './about.css'

const About = () => {
  return (
    <>
        <section className="about">
            <Back name='About Us' title='About Us - Who We Are?' cover={img}/>
            <div className="container flex mtop">
               <div className="left row">
                <Heading title='Our Agency Story' subtitle='Check our Company work and work process'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam eos dolores eum soluta, voluptas excepturi accusantium minus quod dolore asperiores nihil animi harum ad earum quia aperiam deserunt sed ratione!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quo minus alias at eligendi natus beatae accusamus molestias. Officia eius architecto necessitatibus nulla ullam iusto vitae tenetur amet non labore!</p>
                <button className="btn2">More Bout Us</button>
                </div> 
                <div className="right row">
                    <img src="./immio.jpg" alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default About