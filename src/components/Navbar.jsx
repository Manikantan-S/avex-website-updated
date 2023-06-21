import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar z-50 top-4 max-w-4xl fixed left-1/2 -translate-x-1/2">
        <div className="flex-1">
        <a href="/" className=""><img src="/images/Logo.png" alt="Avex Logo" /></a>
        </div>
        <div className="">
            <ul className="menu menu-horizontal px-1 md:flex hidden">
                            <li><a href='/' className="font-inter font-bold" style={{ marginRight: '115px', color: '#9C9B9C' }}>Services</a></li>
                            <li><a href='/' className="font-inter font-bold" style={{ marginRight: '115px', color: '#9C9B9C' }}>Resources</a></li>
                            <li><a href='/' className="font-inter font-bold" style={{ marginRight: '115px', color: '#9C9B9C' }}>About</a></li>
                            <li><a href='/' className="font-inter font-bold" style={{ color: '#9C9B9C' }}>Contact</a></li>
            </ul>
            <details className="dropdown dropdown-end md:hidden">
            <summary className="btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></summary>
            <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 gap-8">
                <li><a href="/">Services</a></li>
                <li><a href="/">Resources</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            </details>
        </div>
    </div>
  )
}

export default Navbar
