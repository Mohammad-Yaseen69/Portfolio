import React, { useEffect } from 'react'
import Container from './Container'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { updateLinks } from '../store/infoSlice'

const ManageLinks = () => {
  const links = useSelector(state => state.info.links)
  const { register, handleSubmit, setValue } = useForm()
  const dispatch = useDispatch()

  useEffect(() => {
    setValue("github", links.github)
    setValue("linkedin", links.linkedin)
    setValue("twitter", links.twitter)
    setValue("instagram", links.instagram)
    setValue("facebook", links.facebook)
  }, [])

  console.log(links)

  const submit = (data) => {
    dispatch(updateLinks(data)) 
  }

  return (
    <Container>
      <div className='w-full flex items-center justify-center flex-col'>
        <h1 className='font-mono text-white font-bold text-5xl pt-10'>Update Links</h1>


        <form onSubmit={handleSubmit(submit)} className='w-full md:w-[70%] flex items-center justify-center flex-col'>

          <div className="mb-3 pt-5 flex items-start w-full flex-col  gap-3">
            <label htmlFor="instagram" className="form-label text-white">Instagram</label>
            <input type="text" required className="bg-zinc-800 w-full border-none outline-none rounded px-5 py-3 text-white" id="instagram" {...register("instagram")} />
          </div>

          <div className="mb-3  pt-5 flex items-start w-full flex-col  gap-3">
            <label htmlFor="linkedin" className="form-label text-white">Linkedin</label>
            <input type="text" required className="bg-zinc-800 w-full border-none outline-none rounded px-5 py-3 text-white" id="linkedin" {...register("linkedin")} />
          </div>


          <div className=" mb-3 pt-5 flex items-start w-full flex-col gap-3">
            <label htmlFor="twitter" className="form-label text-white">Twitter</label>
            <input type="text" required className="bg-zinc-800 w-full border-none outline-none rounded px-5 py-3 text-white" id="twitter" {...register("twitter")} />
          </div>

          <div className=" mb-3 pt-5 flex items-start flex-col w-full  gap-3">
            <label htmlFor="github" className="form-label text-white">Github</label>
            <input type="text" required className="bg-zinc-800 w-full border-none outline-none rounded px-5 py-3 text-white" id="github" {...register("github")} />
          </div>

          <div className=" mb-3 pt-5 flex items-start flex-col w-full  gap-3">
            <label htmlFor="facebook" className="form-label text-white">Facebook</label>
            <input type="text" required className="bg-zinc-800 w-full border-none outline-none rounded px-5 py-3 text-white" id="facebook" {...register("facebook")} />
          </div>

          <button type="submit" className="text-white bg-blue-600 px-10 py-2 rounded-md mt-4">Update</button>
        </form>
      </div>
    </Container>
  )
}

export default ManageLinks