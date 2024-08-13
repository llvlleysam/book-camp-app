import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { userSchema } from "../schema/schemaZod"
import { useMutation } from "@tanstack/react-query"
import httpService from "../Services/BaseServce"

export default function SingInPage() {
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
          try{
              const res = await httpService.post("/signup",credentials)
             if(res.status===201){
                navigate("/login")
            }
          }catch(e){
              console.log(e.response.data)
            }
            return res
        },
        onSuccess:()=>{}
      })

      function onSubmit(values){
        mutate(values)
      }
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center drop-shadow-2xl">
      <p className="bg-gray-400 py-2 px-6 rounded-t-lg text-white font-bold">Sing Up</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-3/5 gap-4 bg-gray-400 p-8 rounded-xl">
        <input {...register("email")} className=" py-2 rounded-lg border border-black drop-shadow-lg pl-4" type="text" placeholder="UserName"/>
        {errors.email && <span className="text-red-500 text-lg ">{errors?.email.message}</span>}
        <input {...register("password")} className=" py-2 rounded-lg border border-black drop-shadow-lg pl-4" type="password" placeholder="Password"/>
        {errors.password && <span className="text-red-500 text-lg ">{errors?.password.message}</span>}
        <input className=" py-2 rounded-lg border border-white bg-gray-700 text-white hover:bg-gray-500 transition duration-200 drop-shadow-lg" type="submit" value={"Sing Up"} />
      </form>
      <p>Go to <span onClick={()=>navigate("/login")} className="text-blue-500 font-bold cursor-pointer">Login Page</span></p>
    </div>
  )
}
