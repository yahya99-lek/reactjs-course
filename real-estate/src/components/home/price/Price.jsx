import React from 'react'
import Heading from '../../common/Heading'
import "./price.css"
import PriceCard from './PriceCard'
const Price = () => {
  return (
    <>
        <section className="price padding">
            <div className="container">
                <Heading title="Select your package" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                <PriceCard />
            </div>
        </section>
    </>
  )
}

export default Price