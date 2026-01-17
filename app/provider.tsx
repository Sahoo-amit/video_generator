'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UserDetailsContext } from '@/context/userContext'

const Provider = ({ children }: { children: React.ReactNode }) => {

  const [userDetail, setUserdetail] = useState(null)
  const CreateNewUser = async () => {
    const res = await axios.post('/api/user', {})
    console.log(res.data)
    setUserdetail(res?.data)
  }

  useEffect(() => {
    CreateNewUser()
  }, [])

  return (
    <div>
      <UserDetailsContext.Provider value={{ userDetail, setUserdetail }}>
        <div className='max-w-7xl mx-auto'>
          {children}
        </div>
      </UserDetailsContext.Provider>
    </div>
  )
}

export default Provider