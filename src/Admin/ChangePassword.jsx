import { useDispatch } from "react-redux"
import Container from "./Container"
import { useForm } from "react-hook-form"
import { changePassword } from "../store/userSlice"

const ChangePassword = () => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()


    const submit = (data) => {
        dispatch(changePassword(data))
    }

    return (
        <Container>
            <div className="flex justify-center items-center h-screen flex-col w-full">
                <h1 className="text-white font-bold font-mono text-5xl ">Change Password</h1>
                <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4 mt-10 w-[50%]">
                    <input {...register("oldPassword")} required placeholder="Old Password" className="p-2 rounded-md bg-zinc-800 text-white border-none outline-none" type="password" />
                    <input {...register("newPassword")} required placeholder="New Password" className="p-2 rounded-md bg-zinc-800 text-white border-none outline-none" type="password" />
                    <button className="bg-sky-500 p-2 rounded-md text-white font-semibold">Change Password</button>
                </form>
            </div>
        </Container>
    )
}

export default ChangePassword
