import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <>
      <div>page</div>
      <Button>Click</Button>
      <UserButton />
    </>
  )
}

export default page