import Types from 'prop-types'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
    name: yup.string().required("Please fill in your name"),
    surname: yup.string().required("Please fill in your surname"),
    salary: yup.number().required("Please fill in your salary")
})
export const AddUser = ({ onAdd }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    })
    const handleAdd = data => {
        axios
            .post("http://localhost:3004/users", data)
            .then(res => {
                onAdd(res.data)
                reset()
            })
    }
    return <div>
        <h1>AddUser</h1>
        <form onSubmit={handleSubmit(handleAdd)}>
            {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
            {errors.surname && <p style={{ color: "red" }}>{errors.surname.message}</p>}
            {errors.salary && <p style={{ color: "red" }}>{errors.salary.message} </p>}
            <label>name</label>
            <input
                {...register("name",)}

            />

            <label>surname</label>
            <input
                {...register("surname",)}

            />

            <label>salary</label>
            <input
                {...register("salary",)}

            />

            <button>save</button>
        </form>
    </div>
}
AddUser.propTypes = {
    onAdd: Types.func
}