import React from 'react'
import Back from '../common/Back'
import PriceCard from '../home/price/PriceCard'
import img from '../images/pricing.jpg'

const Pricing = () => {
  return (
    <>
      <section className="services mb">
        <Back name='30 Days money back guarantee' title='No Extra Fees.Friendly Support' cover={img} />
        <div className="Price container">
            <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing