import Types from 'prop-types'
export const UserList = ({ users, onDelete, onIncrease }) => {

    return <div>
        <h1>UserList</h1>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>salary</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(elm => <tr key={elm.id}
                        className={elm.salary > 800000 ? 'high-salary' : ""}>
                        <td>{elm.id}</td>
                        <td>{elm.name}</td>
                        <td>{elm.surname}</td>
                        <td>{elm.salary}</td>
                        <td>
                            <button className='deletebtn' onClick={() => onDelete(elm.id)}>Delete</button>
                            <button className='salaryUp' onClick={() => onIncrease(elm.id)}>Salary Up</button> </td>
                    </tr>)

                }
            </tbody>
        </table>
    </div>
}
UserList.propTypes = {
    users: Types.arrayOf(Types.exact({
        id: Types.string,
        name: Types.string,
        salary: Types.number,
        surname: Types.string
    })),
    onDelete: Types.func,
    onIncrease: Types.func,
}