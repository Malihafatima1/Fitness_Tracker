import React from 'react'
import { Loader2Icon } from 'lucide-react'

const Loading = () => {
  return (
    <div className='flexx h-screen items-center justify-center bg-gray-50 dark:bg-gray-900'>
          <Loader2Icon className='h-8 w-8 animate-spin text-green-500'/>
    </div>
  )
}

export default Loading