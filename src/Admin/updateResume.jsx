import { useForm } from 'react-hook-form'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addResume } from "../store/infoSlice"
import Container from './Container'

const AddSkillCategory = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();



    const submit = (data) => {
        console.log(data)

        const formData = new FormData();

        formData.append("resume", data.resume[0]);

        dispatch(addResume(formData)).then((res) => {
            console.log(res)
        })
    }

    return (
        <Container>
            <h1 className='font-mono text-white font-bold text-5xl pt-10'>Update Resume</h1>
            <div>
                <form onSubmit={handleSubmit(submit)} className='w-full md:w-[70%] flex items-start  flex-col'>
                    <div className="mb-3 pt-5 flex items-start w-full flex-col  gap-3">
                        <label htmlFor="name" className="form-label text-white">Upload Pdf</label>
                        <input type="file" required className="bg-zinc-800 w-full border-none outline-none rounded px-5 py-3 text-white" id="name" {...register("resume")} />
                    </div>
                    <input type="submit" value="Upload" className='text-white cursor-pointer bg-blue-600 px-10 py-2 rounded-md mt-4' />
                </form>
            </div>
        </Container>
    )
}

export default AddSkillCategory