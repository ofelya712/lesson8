"use client"

import { handleAdd } from "@/components/user-action"
import { useActionState } from "react"

export default function Page() {
    const [state,handleActionAdd]=useActionState(handleAdd,{message:""})
    return <>
        <h1 className="is-size-3">Add User</h1>
            <form action={handleActionAdd}>
                {state?.message && <p style={{color:"red"}}>{state.message}</p>}
                <input
                    type="text"
                    name="name"
                    placeholder="enter the name"
                />
                <br/>
                <input
                    type="text"
                    name="surname"
                    placeholder="enter the surname"
                />
                <br/>
                <input
                    type="text"
                    name="username"
                    placeholder="enter the username"
                />
                <br/>
                <input
                    type="number"
                    name="salary"
                    placeholder="enter the salary"
                />
                <br/>
                <button>Submit</button>
            </form>
      
    </>
}