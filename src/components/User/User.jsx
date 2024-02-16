import { useParams } from "react-router-dom"

function User() {
    const {userid}=useParams()
   
  return (
    <div className="flex justify-center  text-center">
      <div className="h-20 w-full bg-fuchsia-500 text-3xl border-black rounded-md ">
        <p className="relative top-4 text-white">User : {userid}</p>
      </div>
    </div>
  )
}

export default User
