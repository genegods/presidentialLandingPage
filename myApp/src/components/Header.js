import React from 'react'

const Header = () => {
  return (
    <React.Fragment>
    <main>
      <div className='bg-white centered flex-col px-4 py-5'>
      <p className="text-3xl uppercase font-bold text-blue-900 md:tracking-widest">Lunch and first lecture</p>
      <p className="text-sm text-gray-500 track">Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention.</p>
      </div>
    </main>
  </React.Fragment>
  )
}

export default Header