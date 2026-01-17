'use client'

import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const navItem = [
    {id:1, name:'Home', path:'/'},
    {id:2, name:'About', path:'/about'},
    {id:3, name:'Videos', path:'/videos'}
]

const Navbar = () => {
    const {user} = useUser()
    console.log(user)
  return (
    <div className='flex items-center justify-between px-6 py-3'>
        <div>
            <span>Logo</span>
        </div>
        <div className='flex items-center gap-4'>
            {navItem.map((item,index)=>(
                <Link href={item.path} key={index}>
                    {item.name}
                </Link>
            ))}
        </div>
        <div>
            {user ? <UserButton/>:<SignInButton mode='modal'>
                <Button>
                    Get Started
                </Button>
                </SignInButton>}
        </div>
    </div>
  )
}

export default Navbar