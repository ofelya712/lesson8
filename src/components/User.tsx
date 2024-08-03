import { getAllUser } from "@/lib/api"

export const User=()=>{
    const user=getAllUser()

    return <>
    {user.map(elm=><div key={elm.id}>
        
    </div>)}
    </>
}