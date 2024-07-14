import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { RouterProvider, createRoutesFromChildren, createBrowserRouter, Route } from 'react-router-dom'
import {
  AdminRoutes,
  CreateProject,
  ManageLinks,
  ManageProjects,
  ManageSkills,
  UpdateInfo,
  EditProject,
  AddSkills,
  AddSkillCategory,
  ChangePassword,
  UpdateResume
} from "./Admin"

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<AdminRoutes />} >
        <Route path='info' element={<UpdateInfo />} />
        <Route path="projects" element={<ManageProjects />} />
        <Route path="links" element={<ManageLinks />} />
        <Route path="skills" element={<ManageSkills />} />
        <Route path="projects/create" element={<CreateProject />} />
        <Route path="projects/edit/:id" element={<EditProject />} />
        <Route path="skills/add/:categoryId" element={<AddSkills />} />
        <Route path="skills/category" element={<AddSkillCategory />} />
        <Route path="password" element={<ChangePassword />} />
        <Route path="resume" element={<UpdateResume />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
  ,
)
