
import { addUser, getUserByUsername } from "@/lib/api"
import { InputUser } from "@/lib/types"
import { redirect } from "next/navigation"

export const handleAdd = (prev: unknown, data: FormData) => {
    if (!data.get("name") || !data.get("surname") || !data.get("username") || !data.get("salary")) {
        return {
            message: "please fill all the fields"
        }

    }
    const salary = data.get("salary") as string
    if (isNaN(+salary)) {
        return {
            message: "please fill the number"
        }
    }
    const username=getUserByUsername(data.get("username") as string)
    if(username){
        return{
            message:"this username is busy"
        }
    }

    const user: InputUser = {
        name: data.get("name") as string,
        surname: data.get("surname") as string,
        username: data.get("username") as string,
        salary: +(data.get("salary") as string)
    }
    

    addUser(user)
    redirect("/")
}