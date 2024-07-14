import { Outlet } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, getUser } from "../store/userSlice"
import { getInfo } from "../store/infoSlice"
import { Sidebar } from "./"
import { Toaster } from 'react-hot-toast'


const AdminRoutes = () => {
  const isLoggedIn = useSelector(state => state.user.isLogged)
  const user = useSelector(state => state.user.data)
  const loading = useSelector(state => state.user.loading)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())

    if (isLoggedIn && user?.isAdmin) {
      dispatch(getInfo())
      navigate("info")
    }
  }, [isLoggedIn])



  const handleLogin = (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    dispatch(login({ email, password })).then(res => {
      console.log(res)
      navigate("info")
    })
    console.log(user)
  }

  return (
    <div>
      {
        loading ? <div className='flex h-screen w-full justify-center items-center'><div className='loader'></div></div> :
          <>
            {isLoggedIn && user?.isAdmin ?
              <div className='w-full flex'>
                <Sidebar />
                <Outlet />
                <Toaster position="top-right" />
              </div>
              :
              <div className='flex w-full h-screen justify-center items-center '>
                <form className='flex flex-col gap-4 items-center w-full' onSubmit={handleLogin}>
                  <h1 className='font-Code pb-6 text-white font-bold text-4xl'>Login</h1>
                  <input type="email" placeholder='Enter email' required className='p-2 w-[90%] xs:w-[45%] sm:w-[40%] md:w-[20%] bg-zinc-800 text-white rounded border-none outline-none' />
                  <input type="password" placeholder='Enter password' required className='p-2 w-[90%] xs:w-[45%] sm:w-[40%] md:w-[20%] rounded bg-zinc-800 text-white border-none outline-none' />
                  <button type='submit' className='px-3 py-2 bg-blue-500 rounded text-white'>Submit</button>
                </form>
              </div>
            }
          </>
      }
      <Toaster position="top-right" />
    </div >
  )
}

export default AdminRoutes