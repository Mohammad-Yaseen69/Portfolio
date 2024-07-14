import React from 'react'
import Container from './Container'
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux'
import { updateInfo } from '../store/infoSlice'
import { MdOutlineUpdate } from 'react-icons/md'

const UpdateInfo = () => {
  const info = useSelector(state => state.info.info)
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch()


  if (info) {
    setValue("age", info.age)
    setValue("address", info.address)
    setValue("age", info.age)
    setValue("about", info.about)
    setValue("heroTagline", info.heroTagline)
    setValue("workExperience", info.workExperience)
  }

  console.log(info?.id)

  const submit = (data) => {
    console.log(data)


    dispatch(updateInfo({ info: data, id: info.id })).then(res => {
      console.log(res)
    })
  }


  return (
    <Container>

      <div className='w-full flex items-center justify-center flex-col'>
        <h1 className='font-mono text-white font-bold text-5xl pt-10'>Update Information</h1>


        <form onSubmit={handleSubmit(submit)} className='w-full md:w-[70%] flex items-center justify-center flex-col'>
          <div className='flex gap-3 w-full'>
            <div className="mb-3 pt-5 flex items-start w-1/2 flex-col  gap-3">
              <label htmlFor="age" className="form-label text-white">Age</label>
              <input type="number" className="bg-zinc-800 w-full border-none outline-none rounded px-5 py-3 text-white" id="age" {...register("age")} />
            </div>
            <div className="mb-3  pt-5 flex items-start w-1/2 flex-col  gap-3">
              <label htmlFor="address" className="form-label text-white">Address</label>
              <input type="text" className="bg-zinc-800 w-full border-none outline-none rounded px-5 py-3 text-white" id="address" {...register("address")} />
            </div>
          </div>


          <div className=" mb-3 pt-5 flex items-start w-full flex-col  gap-3">
            <label htmlFor="about" className="form-label text-white">About</label>
            <textarea className="bg-zinc-800 w-full resize-none border-none outline-none rounded px-5 py-3 text-white" id="about" rows="3" {...register("about")}></textarea>
          </div>
          <div className=" mb-3 pt-5 flex items-start flex-col w-full  gap-3">
            <label htmlFor="heroTagline" className="form-label text-white">Hero Tagline</label>
            <input type="text" className="bg-zinc-800 w-full border-none outline-none rounded px-5 py-3 text-white" id="heroTagline" {...register("heroTagline")} />
          </div>
          <div className=" mb-3 pt-5 flex items-start flex-col w-full  gap-3">
            <label htmlFor="workExperience" className="form-label text-white">Work Experience</label>
            <input type="text" className="bg-zinc-800 w-full border-none outline-none rounded px-5 py-3 text-white" id="workExperience" {...register("workExperience")} />
          </div>


          <button type="submit" className="text-white bg-blue-600 px-3 py-2 rounded-md mt-4">Update</button>
        </form>
      </div>
    </Container>
  )
}

export default UpdateInfo