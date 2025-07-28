import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div className='about'>
      <h1>About</h1>
      <Link style={{ marginRight: '10px' }} to='employee'>Çalışanlar Hakkında</Link>
      <Link style={{ marginRight: '10px' }} to='company'>Şirket Hakkında</Link>
      <Outlet />
    </div>
  )
}

export default About