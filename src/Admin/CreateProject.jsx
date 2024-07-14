import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react'
import Container from './Container'
import { useForm } from "react-hook-form"
import { createProject } from "../store/infoSlice"
import toast from 'react-hot-toast';

const CreateProject = () => {
  const { register, handleSubmit  , setValue} = useForm();
  const dispatch = useDispatch();


  const submit = (data) => {
    console.log(data)


    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description)
    formData.append("github", data.github)
    formData.append("hostLink", data.hostlink)
    formData.append("techStack", JSON.stringify( data.techStack.replace(" ", "").split(",")))
    formData.append("img", data.img[0])


    dispatch(createProject(formData))

    setValue("name", "")
    setValue("description", "")
    setValue("github", "")
    setValue("hostlink", "")
    setValue("techStack", "")
    setValue("img", "")
  }

  return (
    <Container>
      <div className='w-full flex items-center justify-center flex-col'>
        <h1 className='font-mono text-white font-bold text-5xl pt-10'>Create Project</h1>


        <form onSubmit={handleSubmit(submit)} className='w-full md:w-[70%] flex items-center justify-center flex-col'>
          <div className='flex gap-3 w-full'>
            <div className="mb-3 pt-5 flex items-start w-1/2 flex-col  gap-3">
              <label htmlFor="name" className="form-label text-white">Name</label>
              <input type="text" required className="bg-zinc-800 w-full border-none outline-none rounded px-5 py-3 text-white" id="name" {...register("name")} />
            </div>
            <div className="mb-3  pt-5 flex items-start w-1/2 flex-col  gap-3">
              <label htmlFor="techStack" className="form-label text-white">Tech Stack</label>
              <input type="text" required className="bg-zinc-800 w-full border-none outline-none rounded px-5 py-3 text-white" id="techStack" {...register("techStack")} />
            </div>
          </div>


          <div className=" mb-3 pt-5 flex items-start w-full flex-col gap-3">
            <label htmlFor="description" className="form-label text-white">Description</label>
            <textarea className="bg-zinc-800 w-full resize-none border-none outline-none rounded px-5 py-3 text-white" id="description" rows="3" {...register("description")}></textarea>
          </div>
          <div className='flex gap-3 w-full'>
            <div className=" mb-3 pt-5 flex items-start flex-col w-1/2  gap-3">
              <label htmlFor="github" className="form-label text-white">Github Link</label>
              <input type="text" required className="bg-zinc-800 w-full border-none outline-none rounded px-5 py-3 text-white" id="github" {...register("github")} />
            </div>

            <div className=" mb-3 pt-5 flex items-start flex-col w-1/2  gap-3">
              <label htmlFor="hostlink" className="form-label text-white">Hosted Link</label>
              <input type="text" required className="bg-zinc-800 w-full border-none outline-none rounded px-5 py-3 text-white" id="hostLink" {...register("hostlink")} />
            </div>
          </div>

          <div className=" mb-3 pt-5 self-start flex items-start flex-col w-1/2  gap-3">
            <label htmlFor="img" className="form-label text-white">Image</label>
            <input type="file" required className=" w-full border-none outline-none rounded  py-3 text-white" id="img" {...register("img")} />
          </div>


          <button type="submit" className="text-white bg-blue-600 px-10 py-2 rounded-md mt-4">Create</button>
        </form>
      </div>
    </Container>
  )
}

export default CreateProject