import React from 'react'
import { CardData } from '../data/CardData'

const Card = () => {
  return (
    <React.Fragment>
    <main>
      <div className='grid grid-cols-2 gap-1 md:flex md:justify-center'>
        {
             CardData.map((item, index) => {
                return(
                    <div key={index}>
                        <div className='shadow md:transform md:skew-x-6 md:w-48'>
                        <img src={item.img} alt='image' className='w-full h-52 '/>
                        <div className='bg-pink-500 text-sm capitalize pl-2 text-white'>
                        <p>{item.name}</p>
                        <p>{item.position}</p>
                        </div>
                        </div>
                    </div>
                )
             })
        }
      </div>
    </main>
  </React.Fragment>
  )
}

export default Card