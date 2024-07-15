import React from 'react'
import Container from './Container'
import { useSelector, useDispatch } from 'react-redux'
import { FaTrash, FaEdit } from "react-icons/fa"
import { deleteProject } from "../store/infoSlice"
import { useNavigate } from 'react-router-dom'


const ManageProject = () => {
  const projects = useSelector((state) => state.info.projects)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  console.log(projects)


  return (
    <Container>
      <div className='flex justify-center items-center gap-4 flex-col w-full'>
        <h1 className='font-mono text-white font-bold text-5xl pt-10'>Manage Project</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2  gap-8 mt-10'>
          {projects?.map((project, index) => (
            <div key={index} className='bg-zinc-900 w-full xs:w-96 items-start h-full rounded-lg break-words shadow-lg flex flex-col'>
              <img src={project.img?.publicUrl} alt={project.name} className='w-full h-[15rem] object-cover object-center ' />
              <div className=' p-4 flex w-full break-words flex-1 items-center justify-between'>
                <div className='break-words'>
                  <h2 className='text-white text-xl font-semibold mb-2'>{project.name}</h2>
                  <p className='text-gray-300 mb-4'>{project.description}</p>
                </div>

                <div className='flex gap-3 pt-3'>
                  <FaTrash cursor={"pointer"} color='red' onClick={() => dispatch(deleteProject(project._id))} />
                  <FaEdit cursor={"pointer"} color='green' onClick={() => navigate(`/admin/projects/edit/${project._id}`)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default ManageProject