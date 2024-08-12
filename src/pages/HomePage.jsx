import { useNavigate } from "react-router-dom"

const accessToken = localStorage.getItem("accessToken")
export default function HomePage() {
  const navigate = useNavigate()
  // if(accessToken){
  //   navigate("/login")
  // }
 
    return (
    <div className="flex w-full h-screen">
      <div className="flex flex-col justify-center items-center gap-6 p-4 ">
        <h1 className="text-5xl font-bold">Using education with a flavour</h1>
        <p className="text-xl">An online coding bootcamp that invests in you; a proven pathway to a technical job with a good income!</p>
        <div className="flex gap-4">
          <button className="py-2 px-4 bg-orange-500 text-white font-bold rounded-lg drop-shadow-xl">Consultation and Registration</button>
          <button className="py-2 px-4 border-2 bg-white border-orange-500 text-orange-500 font-bold rounded-lg drop-shadow-xl">What is a boot camp?</button>
        </div>
      </div>
      <img className="w-1/2" src="./firs_page_banner.png" alt="" />
    </div>
  )
}
