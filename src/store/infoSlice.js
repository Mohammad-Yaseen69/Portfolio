import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";



export const Api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL + "/api/v1",
    withCredentials: true
});


const initialState = {
    loading: false,
    info: null,
    projects: [],
    links: [],
    skillCategories: []
}

export const getInfo = createAsyncThunk("getInfo", async () => {
    try {
        const response = await Api.get("/info/getInfo");
        toast.success("Info fetched successfully")
        return response.data;
    } catch (error) {
        console.log(error)
        toast.error("Error fetching info")
        throw new Error(error.response?.data?.message)
    }
})


export const updateInfo = createAsyncThunk("updateInfo", async ({ info, id }) => {
    try {
        const response = await Api.patch(`/info/editInfo/${id}`, info);
        toast.success("Info updated successfully")
        return response.data;
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || "Error updating info")
        throw new Error(error.response?.data?.message)
    }
})


export const createProject = createAsyncThunk("createProject", async (info) => {
    try {
        const response = await Api.post("/info/addProject", info);
        toast.success("Project created successfully")
        return response.data;
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || "Error Creating info")
        throw new Error(error.response?.data?.message)
    }
})


export const deleteProject = createAsyncThunk("deleteProject", async (id) => {
    try {
        const response = await Api.delete(`/info/deleteProject/${id}`);
        toast.success("Project deleted successfully")
        return id;
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || "Error Deleting info")
        throw new Error(error.response?.data?.message)
    }
})

export const editProject = createAsyncThunk("editProject", async ({ info, id }) => {
    try {
        const response = await Api.patch(`/info/editProject/${id}`, info);
        toast.success("Project updated successfully")
        return response.data;
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || "Error Updating info")
        throw new Error(error.response?.data?.message)
    }
})

export const updateLinks = createAsyncThunk("updateLinks", async (links) => {
    try {
        const response = await Api.patch(`/info/updateLinks`, links);
        toast.success("Links updated successfully")
        return response.data;
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || "Error Updating info")
        throw new Error(error.response?.data?.message)
    }
})

export const addSkills = createAsyncThunk("addSkills", async ({skills , categoryId}) => {
    console.log(skills , categoryId)
    try {
        const response = await Api.post(`/info/skills/${categoryId}`, skills);
        toast.success("Skills updated successfully")
        return response.data;
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || "Error Updating info")
        throw new Error(error.response?.data?.message)
    }
})


export const deleteSkills = createAsyncThunk("deleteSkills", async ({skillId, categoryId}) => {
    try {
        const response = await Api.delete(`/info/skills/${categoryId}/${skillId}`);
        toast.success("Skills deleted successfully")
        return response.data;
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || "Error Updating info")
        throw new Error(error.response?.data?.message)
    }
})

export const addSkillCategory = createAsyncThunk("addSkillCategory", async (category) => {
    try {
        const response = await Api.post(`/info/skills/category`, category);
        toast.success("Skill category added successfully")
        return response.data;
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || "Error Updating info")
        throw new Error(error.response?.data?.message)
    }
})

export const deleteSkillCategory = createAsyncThunk("deleteSkillCategory", async (categoryId) => {
    try {
        const response = await Api.delete(`/info/skills/category/${categoryId}`);
        toast.success("Skill category deleted successfully")
        return response.data;
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || "Error Updating info")
        throw new Error(error.response?.data?.message)
    }
})

const infoSlice = createSlice({
    name: "info",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getInfo.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getInfo.fulfilled, (state, action) => {
            const data = action.payload.data[0]
            state.loading = false;
            state.info = {
                age: data?.age,
                address: data?.address,
                workExperience: data?.workExperience,
                about: data?.about,
                heroTagline: data?.heroTagline,
                id: data?._id
            };

            state.projects = data?.projects;
            state.links = data?.connect;
            state.skillCategories = data?.skillCategories;
        })
        builder.addCase(getInfo.rejected, (state) => {
            state.loading = false;
        })
        builder.addCase(updateInfo.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateInfo.fulfilled, (state, action) => {
            const data = action.payload.data
            state.loading = false;
            state.info = {
                age: data?.age,
                address: data?.address,
                workExperience: data?.workExperience,
                about: data?.about,
                heroTagline: data?.heroTagline,
                id: data?._id
            };
        })
        builder.addCase(updateInfo.rejected, (state) => {
            state.loading = false;
        })
        builder.addCase(createProject.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(createProject.fulfilled, (state, action) => {
            state.loading = false;
            state.projects.push(action.payload.data)
        })
        builder.addCase(createProject.rejected, (state) => {
            state.loading = false;
        })
        builder.addCase(deleteProject.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteProject.fulfilled, (state, action) => {
            state.loading = false;
            state.projects = state.projects.filter(project => project._id !== action.payload)
        })
        builder.addCase(deleteProject.rejected, (state) => {
            state.loading = false;
        })
        builder.addCase(editProject.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(editProject.fulfilled, (state, action) => {
            state.loading = false;
            state.projects = state.projects.map(project => {
                const projectObj = action.payload.data?.projects?.find(p => p._id === project._id);
                if (projectObj) return projectObj
                return project
            })
        })
        builder.addCase(editProject.rejected, (state) => {
            state.loading = false;
        })
        builder.addCase(updateLinks.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateLinks.fulfilled, (state, action) => {
            state.loading = false;
            state.links = action.payload.data?.connect
        })
        builder.addCase(updateLinks.rejected, (state) => {
            state.loading = false;
        })
        builder.addCase(addSkills.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(addSkills.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(addSkills.rejected, (state) => {
            state.loading = false;
        })
        builder.addCase(deleteSkills.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteSkills.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(deleteSkills.rejected, (state) => {
            state.loading = false;
        })
    }
})


export default infoSlice.reducer