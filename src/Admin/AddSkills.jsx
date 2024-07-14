import { useForm } from 'react-hook-form'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addSkills } from "../store/infoSlice"
import Container from './Container'

const AddSkills = () => {
    const { categoryId } = useParams()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();



    const submit = (data) => {
        console.log(data)

        const formData = new FormData();

        formData.append("skill", data.skill);
        formData.append("img", data.icon[0]); 

        dispatch(addSkills({
            skills : formData,
            categoryId
        }))
    }

    return (
        <Container>
            <h1 className='font-mono text-white font-bold text-5xl pt-10'>Add Skill</h1>
            <div>
                <form onSubmit={handleSubmit(submit)} className='w-full md:w-[70%] flex items-start  flex-col'>
                    <div className="mb-3 pt-5 flex items-start w-full flex-col  gap-3">
                        <label htmlFor="name" className="form-label text-white">Name</label>
                        <input type="text" required className="bg-zinc-800 w-full border-none outline-none rounded px-5 py-3 text-white" id="name" {...register("skill")} />
                    </div>
                    <div className="mb-3  pt-5 flex items-start w-full flex-col  gap-3">
                        <label htmlFor="techStack" className="form-label text-white">Icon</label>
                        <input type="file" required className="w-full border-none outline-none rounded py-3 text-white" id="techStack" {...register("icon")} />
                    </div>

                    <input type="submit" value="Add" className='text-white cursor-pointer bg-blue-600 px-10 py-2 rounded-md mt-4' />
                </form>
            </div>
        </Container>
    )
}

export default AddSkills