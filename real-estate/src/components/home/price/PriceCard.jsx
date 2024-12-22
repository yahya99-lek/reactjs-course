import React from 'react'
import { price } from '../../data/Data'

const PriceCard = () => {
  return (
    <>
      <section className="content flex mtop">
        {price.map((item, index) => {
            return( <div className="box shadow" key={index}>
                <div className="topbtn">
                    <button className="btn3">{item.best}</button>
                </div>
                <h3>{item.plan}</h3>
                <h1>
                    <span>$</span>{item.price}
                </h1>
                <p>{item.ptext}</p>
                <ul>
                    {item.list.map((val) => {
                        const {icon,text,change} = val
                        return (
                        <li>
                            <label htmlFor="" style={{ 
                                background :change == "color" ? "#dc35451d" : 
                                "27ae601f",
                                color: change == "color" ? "dc3848" : "#27ae60",
                            }}>
                                {icon}
                            </label>
                            <p>{text}</p>
                        </li>
                        )
                    })}
                </ul>
                <button className="btn5" style={{ 
                                background : item.plan == "Standard" ? "green" : 
                                "#fff",
                                color: item.plan == "Standard" ? "fff" : "#27ae60",
                            }}
                >
                    Start {item.plan}
                </button>
            </div>
            )
        })}
        
    </section>  
    </>
  )
}

export default PriceCard