import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { userSchema } from "../schema/schemaZod"
import { redirect, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import httpService from "../Services/BaseServce"

export default function LoginPage() {
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        resolver:zodResolver(userSchema),
        defaultValues:{
        email:"",
        password:""
      }})
      const {mutate}=useMutation({
        mutationFn:async(credentials)=>{
           try {
             const res = await httpService.post("/login",credentials)
             if(res.status===200){
                localStorage.setItem("accessToken",res.data.accessToken)
                localStorage.setItem("email",res.data.user.email)}
                
            } catch(e){
              console.log(e.response.data)
            }
            return res.data
        },
        onSuccess:()=>{ navigate("/bootcamps")}
          
        
})
      function onSubmit(values){
        mutate(values)
      }
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center drop-shadow-2xl">
      <p className="bg-gray-400 py-2 px-6 rounded-t-lg text-white font-bold">Login</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-3/5 gap-4 bg-gray-400 p-8 rounded-xl">
        <input {...register("email")} className=" py-2 rounded-lg border border-black drop-shadow-lg pl-4" type="text" placeholder="UserName"/>
         {errors.email && <span className="text-red-500 text-lg ">{errors?.email.message}</span>}
        <input {...register("password")} className=" py-2 rounded-lg border border-black drop-shadow-lg pl-4" type="password" placeholder="Password"/>
         {errors.password && <span className="text-red-500 text-lg ">{errors?.password.message}</span>}
        <input className=" py-2 rounded-lg border border-white bg-gray-700 text-white hover:bg-gray-500 transition duration-200 drop-shadow-lg" type="submit" value={"Login"} />
      </form>
      <p>If you Don't have an account please <span onClick={()=>navigate("/singup")} className="text-blue-500 font-bold cursor-pointer">click here!</span></p>
    </div>
  )
}
