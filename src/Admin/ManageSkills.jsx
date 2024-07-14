import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from './Container'
import { useNavigate } from 'react-router-dom'
import { IoClose } from 'react-icons/io5';
import { deleteSkills, deleteSkillCategory, addSkillCategory } from '../store/infoSlice';

const ManageSkills = () => {
  const skillsCategory = useSelector((state) => state.info.skillCategories)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleDelete = (categoryId, skillId) => {
    dispatch(deleteSkills({ categoryId, skillId }));
  }

  const handleCategoryDelete = (categoryId) => {
    dispatch(deleteSkillCategory(categoryId));
  }


  return (
    <Container>
      <div className='flex justify-center items-center gap-4 flex-col w-full'>
        <h1 className='font-mono text-white font-bold text-5xl pt-10'>Manage Skills</h1>



        <div className='flex justify-center items-center flex-wrap  w-full'>
          {skillsCategory.map((category, categoryIndex) => (
            <div key={category.id} className='flex flex-col w-[30%] items-center gap-4 mt-4'>
              <div className='flex gap-3'>
                <IoClose cursor="pointer" size={30} color="red" onClick={() => handleCategoryDelete(category._id)} />
                <h2 className='text-white font-semibold text-2xl'>{category.name}</h2>
              </div>

              <div className='flex flex-col gap-2 items-center'>
                {category.skills && category.skills.length > 0 ? (
                  category.skills.map((skill, skillIndex) => (
                    <div className='flex items-center gap-1'>
                      <IoClose cursor="pointer" size={30} color="red" onClick={() => handleDelete(category._id, skill._id)} />
                      <div className='flex items-center gap-2'>
                        <img src={skill.icon.publicUrl} className='size-8' alt="" />
                        <p className='text-white font-bold '>{skill.skill}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className='text-white'>No skills added yet.</p>
                )}
                <button
                  type="button"
                  onClick={() => navigate(`add/${category._id}`)}
                  className='bg-green-500 text-white rounded px-4 py-2 mt-2'
                >
                  Add More Skills
                </button>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => navigate("category")} className='my-4 px-6 py-2 bg-blue-600 rounded-md text-white'>Add Skill Category</button>
      </div>
    </Container>
  )
}

export default ManageSkills
