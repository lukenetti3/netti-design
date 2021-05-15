import * as React from "react"

const Header = () => {
  return (
    <div className='bg-primaryBlue w-100'>
      <nav className='max-w-6xl flex justify-between mx-auto text-white pt-6 '>
        <div className='px-4 md:px-0'>
          <h3 className='m-0 uppercase tracking-widest text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primaryOrange to-white'>
            Netti Design
          </h3>
        </div>
        <div className='flex items-center'>
          <ul className='flex justify-evenly flex-wrap'>
            <li className='px-10 font-bold tracking-wide'>About</li>
            <li className='px-10 font-bold tracking-wide'>Services</li>
            <li className='px-10 font-bold tracking-wide'>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
