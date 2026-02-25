import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
    <div className='Navbar'>
    <button>
      <Image
  src={"Menu.svg"}
  alt="Example"
  width={30}
  height={30}
/>
    </button>
<h1>Hi</h1>
    </div>
    </>
   
  )
}

export default Navbar
