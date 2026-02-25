import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-screen w-64 bg-[--color-sidebar]'>
        <div className='px-4 py-2 text-lg font-semibold text-text-primary'>
            Stack-Panel
        </div>
        <div className='flex flex-col items-center w-full px-2 gap-3'>
            <div className='w-full text-center py-2 hover:bg-gray-200 rounded'>
                Dashboard
            </div>
            <div className='w-full text-center py-2 hover:bg-gray-200 rounded'>
                Projects
            </div>
            <div className='w-full text-center py-2 hover:bg-gray-200 rounded'>
                My Tasks
            </div>
            <div className='w-full text-center py-2 hover:bg-gray-200 rounded'>
                Team Members
            </div>
            <div className='w-full text-center py-2 hover:bg-gray-200 rounded'>
                Attendance
            </div>
            <div className='w-full text-center py-2 hover:bg-gray-200 rounded'>
                Settings
            </div>
        </div>
    </div>
  )
}

export default Sidebar