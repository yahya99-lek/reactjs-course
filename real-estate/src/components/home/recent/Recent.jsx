import React from 'react'
import Heading from '../../common/Heading'
import RecentCard from './RecentCard'
import "./recent.css"

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
            <Heading title="Recent Property Listed" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores alias ullam labore. Eveniet, iste reprehenderit? Ea, ex adipisci quaerat distinctio non alias corrupti qui excepturi! Beatae officia debitis sapiente cum." />
            <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent