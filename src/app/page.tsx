import { User } from "@/components/User"
import { getAllUser } from "@/lib/api"
 
export default function Page(){
  const user=getAllUser()
  console.log(user)
  return <>
    <h1>Home Page</h1>
    <User />
  </>
}