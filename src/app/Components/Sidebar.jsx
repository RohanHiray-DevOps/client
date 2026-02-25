import React from 'react'
import { LayoutDashboard , SquareKanban , ClipboardCheck, UsersRound, Calendar, Settings } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='h-screen w-64 bg-sidebar'>
        <div className='px-4 py-6 text-center text-lg mb-2 font-semibold text-text-primary'>
             Stack-Panel
        </div>
        <div className='flex flex-col items-center w-full px-2 gap-3'>
            <div className='w-full bg-linear-to-r from-primary/60 to-secondary/60 px-4 py-2 hover:bg-linear-to-r from-primary/60 to-secondary/60 rounded'>
                <LayoutDashboard className='inline-block mr-2' /> Dashboard
            </div>
            <div className='w-full px-4 py-2 hover:bg-linear-to-r from-primary/60 to-secondary/60 rounded'>
                <SquareKanban className='inline-block mr-2' /> Projects
            </div>
            <div className='w-full px-4 py-2 hover:bg-linear-to-r from-primary/60 to-secondary/60 rounded'>
                <ClipboardCheck className='inline-block mr-2' /> My Tasks
            </div>
            <div className='w-full px-4 py-2 hover:bg-linear-to-r from-primary/60 to-secondary/60 rounded'>
                <UsersRound className='inline-block mr-2' /> Team Members
            </div>
            <div className='w-full px-4 py-2 hover:bg-linear-to-r from-primary/60 to-secondary/60 rounded'>
                <Calendar className='inline-block mr-2' /> Attendance
            </div>
            <div className='w-full px-4 py-2 hover:bg-linear-to-r from-primary/60 to-secondary/60 rounded'>
                <Settings className='inline-block mr-2' /> Settings
            </div>
        </div>
    </div>
  )
}

export default Sidebar