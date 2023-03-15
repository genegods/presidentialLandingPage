import React from 'react'
import { SessionData } from "../data/CardData";

const SessionColumn = () => {
  return (
    <React.Fragment>
    <main>
      <div className='bg-indigo-900 text-white py-6 mt-3 pl-2'>
        {
            SessionData.map((item, index) => {
                return(
                    <div key={index}>
                        <div className='md:pl-32 md:flex md:space-x-2'>
                        <p className="uppercase font-semibold">{item.session}</p>
                        <p>{item.lecture}</p>
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

export default SessionColumn