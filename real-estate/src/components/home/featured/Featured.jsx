import React from 'react'
import Heading from '../../common/Heading'
import "./featured.css"
import FeaturedCard from './FeaturedCard'
const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
            <Heading title="Featured Property Types" subtitle="Find all types of property "/>
            <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured