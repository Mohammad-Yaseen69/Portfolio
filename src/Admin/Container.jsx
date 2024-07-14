import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full p-3 xs:pb-4 max-sm:py-9'>
        {children}
    </div>
  )
}

export default Container