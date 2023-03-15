import React from 'react'
import Card from './Card'
import Header from './Header'
import SessionColumn from './SessionColumn'

const MainPage = () => {
  return (
    <React.Fragment>
    <main>
      <div className='mx-2'>
        <Header/>
        <Card/>
        <SessionColumn/>
      </div>
    </main>
  </React.Fragment>
  )
}

export default MainPage