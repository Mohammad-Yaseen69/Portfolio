import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full p-3 xs:pb-4'>
        {children}
    </div>
  )
}

export default Container